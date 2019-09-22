// ================================
// Imports
const { Card, Bless, Curse } = require("./cards.js");

// ================================
// Modifier Deck
class Deck {

    constructor() {

        // Name of the Deck
        this.name = "Modifier Deck",

        // Cards in Deck
        this.cards = [],

        // Discard Pile
        this.discards = []
    }

    // Mix Deck and Discard

    // Shuffle
    shuffle() {
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = this.cards[currentIndex];
          this.cards[currentIndex] = this.cards[randomIndex];
          this.cards[randomIndex] = temporaryValue;
        }
        return;
      }
      
    // Draw
    draw() {
        this.discards.push(this.cards.pop());
        return
    }

    addCard(card) {
        // ToDo Error

        this.cards.push(card);
        return;
    }

    addCards(cards) {
        // ToDo Error

        for (var c = 0; c < cards.length; c++) {
            this.cards.push(cards[c]);
        }
        return;
    }

}

// ================================
// Modifier Deck / Player
class Player extends Deck {

    constructor() {
        super()

    }


}

// ================================
// Monster Deck
class Monster extends Deck {

    constructor() {
        super()
    }


    // Draw Top and add to discard (and apply effects)

    // Apply Effects

}

class MonsterBless extends Deck {};
class MonsterCurse extends Deck {};
class PlayerBless extends Deck {};
class PlayerCurse extends Deck {};

// ================================
// Console.log
const card1 = new Bless;
const card2 = new Curse;
const deck = new Deck;

deck.addCard(card1);
deck.addCard(card2);

console.log(deck.cards)
console.log("============================")

deck.draw();
console.log(deck.cards)
console.log("============================")
console.log(deck.discards)


// ================================
// Exports
module.exports = {
    Deck,
    Player,
    PlayerBless,
    PlayerCurse,
    Monster,
    MonsterBless,
    MonsterCurse
}
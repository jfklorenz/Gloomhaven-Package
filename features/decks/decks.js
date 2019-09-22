// ================================
// Imports
const { Card, Bless, Curse } = require("../cards/cards.js");

// ================================
// Modifier Deck
class Deck {

    constructor() {

        // Name of the Deck
        this.name = "Modifier Deck",

        // Cards in Deck
        this.cards = [],

        // Discard Pile
        this.discards = [],

        // Last Played
        this.played = []
    }

    // Mix Deck and Discard

    // Shuffle
    shuffle() {
        while (this.discards.length > 0) {
            this.cards.push(this.discards.pop());
        }
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
        let card = this.cards.pop();
        this.discards.push(card);
        this.played.push(card);
        if (card.rolling) {
            this.draw();
        }
        return;
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
console.log("============================")
console.log(deck.played)
console.log("============================")
console.log("============================")
console.log("============================")
deck.shuffle()
console.log("CARDS", deck.cards)
console.log("============================")
console.log("DISCARD", deck.discards)
console.log("============================")
console.log("DECK", deck.played)
console.log("============================")
console.log("============================")
console.log("============================")
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
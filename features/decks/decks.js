// ================================
// Imports
const { Card, PlusTwo, PlusOne, Bless, Curse } = require("../cards/cards.js");

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

        // Value after drawing
        this.modifier = 0,

        // Modifier after drawing
        this.special = []
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
    draw(value) {
        let card = this.cards.pop();
        // Add Special
        if (!(card.special === null)) special.push(card.special);

        // Rolling or not rolling
        if (card.rolling) {
            this.draw(card.modifier(value));
        } else {
            this.modifier = card.modifier(value);
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
// ================================
// Imports
const { Card, PlusTwo, PlusOne, Bless, Curse } = require("../cards/cards.js");

// ================================
// Modifier Deck
class Deck {

    // --------------------------------
    constructor() {
        // Name of the Deck
        this.name = "Modifier Deck",

        // Perks
        this.perks = {},

        // Cards in Deck
        this.cards = [],

        // Discard Pile
        this.discards = [],

        // Modifier after drawing
        this.modifier = [],

        // Special after drawing
        this.special = [],

        // Value after drawing
        this.value = null,

        // Needs to be shuffled
        this.shuffle = false,

        // Cards currently looked at
        this.looking = []
    }

    // --------------------------------
    // Mix & Shuffle
    shuffleDeck() {
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
        this.shuffle = false;
        return;
    }

    // --------------------------------
    // Add a Card
    addCard(card) {
        this.cards.push(card);
        return;
    }

    // --------------------------------
    // Add multiple Cards at once
    addCards(cards) {
        for (var c = 0; c < cards.length; c++) {
            this.cards.push(cards[c]);
        }
        return;
    }

    // --------------------------------
    // 2.3. Remove a Card
    removeCard(card) {
        var index = this.cards.indexOf(card);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
        return;
    }

    // --------------------------------
    // Remove multiple Cards at once
    removeCards(cards) {
        for (var c = 0; c < cards.length; c++) {
            this.removeCard(cards[c])
        }
        return;
    }

    // --------------------------------
    // Draw
    draw(value = 0, fresh = true) {
        
        if (fresh) this.modifier = [];
        const card = this.cards.pop();
        this.discards.push(card);
        
        if (card.shuffle) this.shuffle = true;
        if (!(card.special === null)) special.push(card.special);
        this.modifier.push(card.name);
        this.value = card.modifier(value);

        // Rolling
        if (card.rolling) this.draw(card.modifier(value, false));
        
        return;
    }

    // --------------------------------
    // Advantage
    advantage(value) {
        const card1 = this.cards.pop;
        const card2 = this.cards.pop;
        this.discards.push(card1);
        this.discards.push(card2);
        // Rolling
        if ((!card1.rolling) && (!card2.rolling)) {
            // No Card Rolling
            if (card1.cmp > card2.cmp) {
                if (!(card1.special === null)) special.push(card1.special);
                if (card1.shuffle) this.shuffle = true;
                this.modifier = card1.modifier(this.modifier);
                this.value = card1.modifier(value);
            } else if (card1.cmp < card2.cmp) {
                if (card2.shuffle) this.shuffle = true;
                if (!(card2.special === null)) special.push(card2.special);
                this.modifier = card2.modifier(this.modifier);
                this.value = card2.modifier(value);
            } else if (card1.cmp === card2.cmp) {
                if (card1.shuffle) this.shuffle = true;
                if (!(card1.special === null)) special.push(card1.special);
                this.modifier = card1.modifier(this.modifier);
                this.value = card1.modifier(value);
            }
        } else if (card1.rolling && card2.rolling) {
            // Both Cards Rolling
            if (card1.shuffle) this.shuffle = true;
            if (card2.shuffle) this.shuffle = true;
            if (!(card1.special === null)) special.push(card1.special);
            if (!(card2.special === null)) special.push(card2.special);
            this.modifier = card1.modifier(this.modifier);
            this.value = card1.modifier(value);
            this.modifier = card2.modifier(this.modifier);
            this.value = card2.modifier(value);
            this.draw(this.value, false)
        } else if (card1.rolling) {
            // Only Card 1 Rolling
            if (card1.shuffle) this.shuffle = true;
            if (card2.shuffle) this.shuffle = true;
            if (!(card1.special === null)) special.push(card1.special);
            if (!(card2.special === null)) special.push(card2.special);
            this.modifier = card1.modifier(this.modifier);
            this.value = card1.modifier(value);
            this.modifier = card2.modifier(this.modifier);
            this.value = card2.modifier(value);
        } else if (card2.rolling) {
            // Only Card 2 Rolling
            if (card2.shuffle) this.shuffle = true;
            if (card1.shuffle) this.shuffle = true;
            if (!(card2.special === null)) special.push(card1.special);
            if (!(card1.special === null)) special.push(card2.special);
            this.modifier = card2.modifier(this.modifier);
            this.value = card2.modifier(value);
            this.modifier = card1.modifier(this.modifier);
            this.value = card1.modifier(value);
        }
        return;
    }

    // --------------------------------
    // Disadvantage
    disadvantage(value) {
        const card1 = this.cards.pop;
        const card2 = this.cards.pop;
        this.discards.push(card1);
        this.discards.push(card2);
        // Rolling
        if ((!card1.rolling) && (!card2.rolling)) {
            // No Card Rolling
            if (card1.cmp > card2.cmp) {
                if (!(card2.special === null)) special.push(card1.special);
                this.modifier = card2.modifier(this.modifier);
                this.value = card2.modifier(value);
            } else if (card1.cmp < card2.cmp) {
                if (!(card1.special === null)) special.push(card2.special);
                this.modifier = card1.modifier(this.modifier);
                this.value = card1.modifier(value);
            } else if (card1.cmp === card2.cmp) {
                if (!(card1.special === null)) special.push(card1.special);
                this.modifier = card1.modifier(this.modifier);
                this.value = card1.modifier(value);
            }
        }
    }

    // --------------------------------
    showPerk(perk) {
        return this.perks[perk];
    }

    // --------------------------------
    // Apply a Perk
    applyPerk(perk) {
        this.cards.addCards(this.perks[perk].add);
        this.cards.removeCards(this.perks[perk].remove);
    }

    // --------------------------------
    // Look at the top cards
    look(top) {
        let cards = [];
        for (var i = this.cards.length; i >= this.cards.length - top; i++) {
            cards.push(this.cards[i]);
        }
        return cards;
    }

    // --------------------------------
    // Take the top cards to look at them
    take(top) {
        for (var i = 0; i < top; i++) {
            this.looking.push(this.cards.pop());
        }
        return;
    }

    // Put the cards you are looking at back at given order
    put(card) {
        const len = this.looking.length;
        var index = this.looking.indexOf(card);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
        if (len > this.looking.length) {
            this.cards.push(card);
        }
        return;

    }
}

// ================================
// Modifier Deck / Player
class Player extends Deck {

    constructor() {
        super(),
        this.cards = [
            Double,
            PlusTwo,
            PlusOne, PlusOne, PlusOne, PlusOne,
            PlusZero, PlusZero, PlusZero, PlusZero,
            MinusOne, MinusOne, MinusOne, MinusOne,
            MinusTwo,
            Empty
        ]

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
// Tinkerer
class Tinkerer extends Player {
    constructor() {
        super(),
        this.perks = {
            1: {
                add: [],
                remove: []
            },
            2: {
                add: [],
                remove: []
            },
            3: {
                add: [],
                remove: []
            },
            4: {
                add: [],
                remove: []
            },
            5: {
                add: [],
                remove: []
            },
            6: {
                add: [],
                remove: []
            },
            7: {
                add: [],
                remove: []
            },
            8: {
                add: [],
                remove: []
            },
            9: {
                add: [],
                remove: []
            }
        }
    }
}


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
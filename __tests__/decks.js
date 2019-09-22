const expect = require("expect.js");
const { Card, PlusTwo, PlusOne, PlusZero, MinusOne, MinusTwo, Double, Empty, Bless, Curse } = require("../features/cards/cards.js")
const { Deck, Player, PlayerBless, PlayerCurse, Monster, MonsterBless, MonsterCurse} = require("../features/decks/decks.js");

// ================================================================
describe('Test / Gloomhaven Modifier Decks', function() {
  // Cards
  const card = new Card;
  const p2 = new PlusTwo;
  const p1 = new PlusOne;
  const p0 = new PlusZero;
  const m1 = new MinusOne;
  const m2 = new MinusTwo;
  const double = new Double;
  const empty = new Empty;
  const bless = new Bless;
  const curse = new Curse;
  
  it("0.0. Error - Input invalid", function() {
    // Standard Input Invalid
  });

  // ================================
  // 1. Deck
  it("1.0. Deck - Attributes", function() {
    let deck = new Deck;
    expect(deck.name).to.eql("Modifier Deck");
    expect(deck.cards).to.eql([]);
    expect(deck.discards).to.eql([]);
   });

   // --------------------------------
   it("1.1. Deck - addCard", function() {
    let deck = new Deck;
    
    deck.addCard(card);
    expect(deck.cards).to.eql([card]);
    expect(deck.cards.length).to.eql(1);

    deck.addCard(card);
    expect(deck.cards).to.eql([card, card]);
    expect(deck.cards.length).to.eql(2);
   });

   // --------------------------------
   it("1.2. Deck - addCards", function() {
    let deck = new Deck;
    let cards = [card, card, card]
    
    deck.addCards(cards);
    expect(deck.cards).to.eql([card, card, card]);
    expect(deck.cards.length).to.eql(3);

    deck.addCards(cards);
    expect(deck.cards).to.eql([card, card, card, card, card, card]);
    expect(deck.cards.length).to.eql(6);
  });

  // -------------------------------
  it("1.3. Deck - removeCard", function() {
    // Standard Input Invalid
  });

  // -------------------------------
  it("1.4. Deck - removeCards", function() {
    // Standard Input Invalid
  });

  // -------------------------------
  it("1.5. Deck - draw", function() {
    let deck = new Deck;
    deck.addCards([bless, curse, m1, p2]);
    let d1 = deck.draw(2);
    expect(d1[0]).to.eql(4);
    expect(d1[1]).to.eql([null]);

    let d2 = deck.draw(3);
    expect(d2[0]).to.eql(2);
    expect(d2[1]).to.eql([null]);
  });

  // -------------------------------
  it("1.6. Deck - advantage", function() {
    // Standard Input Invalid
  });

  // -------------------------------
  it("1.7. Deck - disadvantage", function() {
    // Standard Input Invalid
  });

});

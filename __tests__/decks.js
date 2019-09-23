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
    expect(deck.perks).to.eql({});
    expect(deck.cards).to.eql([]);
    expect(deck.discards).to.eql([]);
    expect(deck.modifier).to.eql([]);
    expect(deck.special).to.eql([]);
    expect(deck.value).to.eql(null);
    expect(deck.shuffle).to.eql(false);
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
    let deck = new Deck;
    let cards = [p2, p1, p0, m1, m2, m2, m1, m2];
    deck.addCards(cards);

    deck.removeCard(p1);
    expect(deck.cards).to.eql([p2,p0,m1,m2,m2,m1,m2]);

    deck.removeCard(m2);
    expect(deck.cards).to.eql([p2,p0,m1,m2,m1,m2]);
  
    deck.removeCard(p1);
    expect(deck.cards).to.eql([p2,p0,m1,m2,m1,m2]);
  });

  // -------------------------------
  it("1.4. Deck - removeCards", function() {
    let deck = new Deck;
    let cards = [p2, p2, p1, p1, p0, p0, m1, m1, m2, m2];
    deck.addCards(cards);

    deck.removeCards([p2,p1,p0,m1,m2]);
    expect(deck.cards).to.eql([p2,p1,p0,m1,m2]);

    deck.removeCards([p2,p1,p0]);
    expect(deck.cards).to.eql([m1,m2]);

    deck.removeCards([p1,m1]);
    expect(deck.cards).to.eql([m2]);

    let deck2 = new Deck;
    let cards2 = [p2,p2,p2,p1,p1,p1];
    deck2.addCards(cards2);

    deck2.removeCards([p2,p2,p1]);
    expect(deck2.cards).to.eql([p2,p1,p1]);
  });

  // -------------------------------
  it("1.5. Deck - draw", function() {
    let deck = new Deck;
    deck.addCards([empty, bless, m1, p2]);
    
    deck.draw(2);
    expect(deck.modifier).to.eql(["+2"]);
    expect(deck.special).to.eql([]);
    expect(deck.value).to.eql(4);
    expect(deck.shuffle).to.eql(false);

    deck.draw(3);
    expect(deck.modifier).to.eql(["-1"]);
    expect(deck.special).to.eql([]);
    expect(deck.value).to.eql(2);
    expect(deck.shuffle).to.eql(false);

    deck.draw(3);
    expect(deck.modifier).to.eql(["Bless"]);
    expect(deck.special).to.eql([]);
    expect(deck.value).to.eql(6);
    expect(deck.shuffle).to.eql(false);

    deck.draw(1);
    expect(deck.modifier).to.eql(["Empty"]);
    expect(deck.special).to.eql([]);
    expect(deck.value).to.eql(0);
    expect(deck.shuffle).to.eql(true);

  });

  // -------------------------------
  it("1.6. Deck - advantage", function() {
    // Standard Input Invalid
  });

  // -------------------------------
  it("1.7. Deck - disadvantage", function() {
    // Standard Input Invalid
  });

  // -------------------------------
  it("1.8. Deck - ShuffleDeck", function() {
    // New Deck
    let deck = new Deck;
    deck.addCards([p2,p1,p0,double,m1]);

    expect(deck.shuffle).to.eql(false);
    deck.draw();
    expect(deck.shuffle).to.eql(false);
    deck.draw();
    expect(deck.shuffle).to.eql(true);
    deck.draw();
    expect(deck.shuffle).to.eql(true);
    expect(deck.cards.length).to.eql(2);
    expect(deck.discards.length).to.eql(3);

    deck.shuffleDeck();
    expect(deck.shuffle).to.eql(false);
    expect(deck.cards.length).to.eql(5);
    expect(deck.discards.length).to.eql(0);
  });


});

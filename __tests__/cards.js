const expect = require("expect.js");
const { Card, PlusTwo, PlusOne, PlusZero, MinusOne,  MinusTwo, Double, Empty, Bless, Curse } = require("../features/cards/cards.js");

// ================================================================
describe('test/card - A single playing card', function() {
  
  // ================================
  // 0. Error
  it("0.0. Error - Input invalid", function() {
    //
  });

  // ================================
  // 1. Base Cards
  it("1.0. Card", function() {
    let card = new Card;
    expect(card.name).to.eql("Modifier Card");
    expect(card.modifier).to.eql(null);
    expect(card.cmp).to.eql(null);
    expect(card.shuffle).to.eql(false);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);
  });

  // --------------------------------
  it("1.1. Plus 2", function() {
    let card = new PlusTwo;
    expect(card.name).to.eql("+2");
    expect(card.cmp).to.eql(2);
    expect(card.shuffle).to.eql(false);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);

    expect(card.modifier(0)).to.eql(2);
    expect(card.modifier(1)).to.eql(3);
    expect(card.modifier(2)).to.eql(4);
    expect(card.modifier(3)).to.eql(5);
    expect(card.modifier(4)).to.eql(6);
    expect(card.modifier(5)).to.eql(7);
    expect(card.modifier(6)).to.eql(8);
  });

  // --------------------------------
  it("1.2. Plus 1", function() {
    let card = new PlusOne;
    expect(card.name).to.eql("+1");
    expect(card.cmp).to.eql(1);
    expect(card.shuffle).to.eql(false);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);

    expect(card.modifier(0)).to.eql(1);
    expect(card.modifier(1)).to.eql(2);
    expect(card.modifier(2)).to.eql(3);
    expect(card.modifier(3)).to.eql(4);
    expect(card.modifier(4)).to.eql(5);
    expect(card.modifier(5)).to.eql(6);
    expect(card.modifier(6)).to.eql(7);
  });

  // --------------------------------
  it("1.3. Plus 0", function() {
    let card = new PlusZero;
    expect(card.name).to.eql("+0");
    expect(card.cmp).to.eql(0);
    expect(card.shuffle).to.eql(false);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);

    expect(card.modifier(0)).to.eql(0);
    expect(card.modifier(1)).to.eql(1);
    expect(card.modifier(2)).to.eql(2);
    expect(card.modifier(3)).to.eql(3);
    expect(card.modifier(4)).to.eql(4);
    expect(card.modifier(5)).to.eql(5);
    expect(card.modifier(6)).to.eql(6);
  });

  // --------------------------------
  it("1.4. Minus 1", function() {
    let card = new MinusOne;
    expect(card.name).to.eql("-1");
    expect(card.cmp).to.eql(-1);
    expect(card.shuffle).to.eql(false);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);

    expect(card.modifier(0)).to.eql(0);
    expect(card.modifier(1)).to.eql(0);
    expect(card.modifier(2)).to.eql(1);
    expect(card.modifier(3)).to.eql(2);
    expect(card.modifier(4)).to.eql(3);
    expect(card.modifier(5)).to.eql(4);
    expect(card.modifier(6)).to.eql(5);
  });

  // --------------------------------
  it("1.5. Minus 2", function() {
    let card = new MinusTwo;
    expect(card.name).to.eql("-2");
    expect(card.cmp).to.eql(-2);
    expect(card.shuffle).to.eql(false);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);

    expect(card.modifier(0)).to.eql(0);
    expect(card.modifier(1)).to.eql(0);
    expect(card.modifier(2)).to.eql(0);
    expect(card.modifier(3)).to.eql(1);
    expect(card.modifier(4)).to.eql(2);
    expect(card.modifier(5)).to.eql(3);
    expect(card.modifier(6)).to.eql(4);
  });

  // --------------------------------
  it("1.6. Double", function() {
    let card = new Double;
    expect(card.name).to.eql("Double");
    expect(card.cmp).to.eql(10);
    expect(card.shuffle).to.eql(true);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);

    expect(card.modifier(0)).to.eql(0);
    expect(card.modifier(1)).to.eql(2);
    expect(card.modifier(2)).to.eql(4);
    expect(card.modifier(3)).to.eql(6);
    expect(card.modifier(4)).to.eql(8);
    expect(card.modifier(5)).to.eql(10);
    expect(card.modifier(6)).to.eql(12);
  });

  // --------------------------------
  it("1.7. Empty", function() {
    let card = new Empty;
    expect(card.name).to.eql("Empty");
    expect(card.cmp).to.eql(-10);
    expect(card.shuffle).to.eql(true);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);

    expect(card.modifier(0)).to.eql(0);
    expect(card.modifier(1)).to.eql(0);
    expect(card.modifier(2)).to.eql(0);
    expect(card.modifier(3)).to.eql(0);
    expect(card.modifier(4)).to.eql(0);
    expect(card.modifier(5)).to.eql(0);
    expect(card.modifier(6)).to.eql(0);
  });

  // --------------------------------
  it("1.8. Bless", function() {
    let card = new Bless;
    expect(card.name).to.eql("Bless");
    expect(card.cmp).to.eql(10);
    expect(card.shuffle).to.eql(false);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);

    expect(card.modifier(0)).to.eql(0);
    expect(card.modifier(1)).to.eql(2);
    expect(card.modifier(2)).to.eql(4);
    expect(card.modifier(3)).to.eql(6);
    expect(card.modifier(4)).to.eql(8);
    expect(card.modifier(5)).to.eql(10);
    expect(card.modifier(6)).to.eql(12);
  });

  // --------------------------------
  it("1.9. Curse", function() {
    let card = new Curse;
    expect(card.name).to.eql("Curse");
    expect(card.cmp).to.eql(-10);
    expect(card.shuffle).to.eql(false);
    expect(card.rolling).to.eql(false);
    expect(card.special).to.eql(null);
    expect(card.png).to.eql(null);

    expect(card.modifier(0)).to.eql(0);
    expect(card.modifier(1)).to.eql(0);
    expect(card.modifier(2)).to.eql(0);
    expect(card.modifier(3)).to.eql(0);
    expect(card.modifier(4)).to.eql(0);
    expect(card.modifier(5)).to.eql(0);
    expect(card.modifier(6)).to.eql(0);
  });

});

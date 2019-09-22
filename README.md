# Gloomhaven-Modifier
This is a *Javascript* package for the *Attack-Modifier* of the boardgame *Gloomhaven*.

For this purpose each modifier card and each modifier deck is explicitely implemented.

This package includes a corresponding *.png* file for every single card.

---

## Features
The *features* folder contains the source code and pictures.

- [x] Create every modifier card
- [x] Create every character deck
- [x] Add or remove cards from the deck
- [x] Shuffle the deck
- [x] Draw a card from a deck with a given value
- [ ] Draw with advantage/disadvantage
- 

---

## Tests
The *__ tests __* folder contains the tests for the implemented features.
Every implemented feature was tested seperately as well as within joined cases.

- [x] All cards with respective modifier
- [x] All implemented deck methods

---

## Examples

```javascript
// Create a card
const plusTwo = new PlusTwo

// Apply card modifier to a value
plusOne.modifier(3) == 5

// Create a deck
var deck = new Deck

// Add a card to the deck
deck.addCard(plusTwo)

// Draw a card with a value
const result = deck.draw(4)
// => New value
result[0] == 6
// => Special (i.e. elements, heal, ..)
result[1] == [null]
```
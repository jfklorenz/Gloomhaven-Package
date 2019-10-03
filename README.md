# Gloomhaven-Modifier

[![NPM](https://nodei.co/npm/gloomhaven-modifier.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gloomhaven-modifier/)

![GitHub top language](https://img.shields.io/github/languages/top/jfklorenz/gloomhaven-modifier) ![npm](https://img.shields.io/npm/v/gloomhaven-modifier) ![npm](https://img.shields.io/npm/dm/gloomhaven-modifier) ![NPM](https://img.shields.io/npm/l/gloomhaven-modifier)

This is a *Javascript* package for the *Attack-Modifier* of the boardgame *Gloomhaven*.

For this purpose each modifier card and each modifier deck is explicitely implemented.

This package includes a corresponding *.png* file for every single card.

---

## Features
The *features* folder contains the source code and pictures.

#### Cards
- [x] Create every base modifier card
- [ ] Create every class modifier card

#### Decks
- [x] Create player and monster modifier decks
- [ ] Create every class modifier deck
- [x] Add or remove cards from the deck
- [x] Shuffle the deck
- [x] Draw a card from a deck with a given value
- [ ] Draw with advantage/disadvantage
- [ ] Look at the top X cards
- [ ] Look at the top X cards and put them back in any order
- [ ] Apply perks of a class

---

## Tests
The *__ tests __* folder contains the tests for the implemented features.
Every implemented feature was tested seperately as well as within joined cases.

- [x] All implemented cards
- [x] All implemented decks and methods

---

## Examples

```javascript
// Create a card
const plusTwo = new PlusTwo

// Apply card modifier to a value
plusTwo.modifier(3) == 5

// Create a deck
var deck = new Deck

// Add a card to the deck (i.e. +2 card)
deck.addCard(plusTwo)

// Draw a card with a value (i.e. 4)
deck.draw(4)

// Modifier after drawing
deck.modifier == 4

// Value after drawing
deck.value == 6

// Special after drawing
deck.special = []
```
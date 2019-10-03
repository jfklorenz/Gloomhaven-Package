# Decks
This folder contains a template class for a basic deck as well as a modifier deck for every class as *Javascript* code.

---

## Deck Attributes

#### name
Name of the Deck.
```javascript
/*
@returns {String} Name of the Deck
*/
deck.name

// Examples
var deck = new Deck;
deck.name == "Modifier Deck"

var player = new Player;
deck.name == "Player Deck"
```

## perks
All Perks of a *Gloomhaven class*.
```javascript
/*
@returns {dict} Dictionary of 9 Dictionaries of 2 Lists for adding and removing Cards
*/
deck.perks
deck.perks[n] // n = 1..9
deck.perks[n].add
deck.perks[n].remove

// Examples
var tinkerer = new Tinkerer;
tinkerer.perks[1] == {add: [], remove: []}
tinkerer.perks[1].add == [] 
tinkerer.perks[1].remove == [] 
```

#### cards
Cards in the Deck.
```javascript
/*
@returns {list} List of Cards left in the deck
*/
deck.cards

// Examples
let player = new Player
player.cards == []
```

#### discards
Discard Pile.
```javascript
/*
@returns {list} List of Cards on the discard pile
*/
deck.discards

// Examples
let player = new Player
player.discards == []
```

#### modifier
Applied Modifier.
```javascript
/*
@returns {list} List of all applied modifiers after drawing
*/
deck.modifier

// Examples
let player = new Player
player.modifier == []
```

#### special
Applied specials.
```javascript
/*
@returns {list} List of all applied specials after drawing
*/
deck.specials

// Examples
let player = new Player
player.specials == []
```

#### value
Modified attack value after drawing.
```javascript
/*
@returns {number || null} 
*/
deck.value

// Examples
let player = new Player
player.value == []
```

#### shuffle
The shuffle value represents the current shuffle state of the deck. 
```javascript
/*
@returns {boolean} true: needs to be shuffled, false: no need to be shuffled
*/
deck.shuffle

// Examples
let player = new Player
player.shuffle == []
```

---

## Deck Methods

- [x] 1.0. Attributes
- [x] 1.1. addCard()
- [x] 1.2. addCards()
- [x] 1.3. removeCard()
- [x] 1.4. removeCards()
- [x] 1.5. draw()
- [ ] 1.6. advantage()
- [ ] 1.7. disadvantage()
- [x] showPerk()
- [x] applyPerk()
- [x] look()
- [x] take()
- [x] put()

---

## Classes
The following class-decks are implemented:

- [x] Base
- [ ] BE / 
- [ ] BR / Brute
- [ ] BS / 
- [ ] BT / 
- [ ] CH / Creagheart
- [ ] DR / 
- [ ] DS / 
- [ ] EL / 
- [ ] MT / Mindthief
- [ ] NS / 
- [ ] PH / 
- [ ] QM / Quartermaster
- [ ] SB / 
- [ ] SC / Scoundrel
- [ ] SK / 
- [ ] SS / 
- [ ] SU / 
- [ ] SW / Spellweaver 
- [ ] TI / Tinkerer
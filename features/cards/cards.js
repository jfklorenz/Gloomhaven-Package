// ================================
// 0. Base Cards
// ================================
// 0.0. Basic Modifier Card
class Card {
    constructor() {
        this.name = "Modifier Card",
        this.modifier = null,
        this.cmp = null
        this.shuffle = false,
        this.rolling = false,
        this.special = null,
        this.png = null
    }
}

// --------------------------------
// 0.1. Plus 2
class PlusTwo extends Card {
    constructor() {
        super(),
        this.name = "+2",
        this.cmp = 2,
        this.modifier = (x => x + 2)
    }
}

// --------------------------------
// 0.2. Plus 1
class PlusOne extends Card {
    constructor() {
        super(),
        this.name = "+1",
        this.cmp = 1,
        this.modifier = (x => x + 1)
    }
}

// --------------------------------
// 0.3. Plus 0
class PlusZero extends Card {
    constructor() {
        super(),
        this.name = "+0",
        this.cmp = 0,
        this.modifier = (x => x + 0)
    }
}

// --------------------------------
// 0.4. Minus 1
class MinusOne extends Card {
    constructor() {
        super(),
        this.name = "-1",
        this.cmp = -1,
        this.modifier = (x => Math.max(x - 1, 0))
    }
}

// --------------------------------
// 0.5. Minus 2
class MinusTwo extends Card {
    constructor() {
        super(),
        this.name = "-2",
        this.cmp = -2,
        this.modifier = (x => Math.max(x - 2, 0))
    }
}

// --------------------------------
// 0.6. Double
class Double extends Card {
    constructor() {
        super(),
        this.name = "Double",
        this.cmp = 10,
        this.modifier = (x => x * 2),
        this.shuffle = true
    }
}

// --------------------------------
// 0.7. Empty
class Empty extends Card {
    constructor() {
        super(),
        this.name = "Empty",
        this.cmp = -10,
        this.modifier = (x => x * 0),
        this.shuffle = true
    }
}

// --------------------------------
// 0.8. Bless
class Bless extends Card {
    constructor() {
        super(),
        this.name = "Bless",
        this.cmp = 10,
        this.modifier = (x => x * 2)
    }
}

// --------------------------------
// 0.9. Curse
class Curse extends Card {
    constructor() {
        super(),
        this.name = "Curse",
        this.cmp = -10,
        this.modifier = (x => x * 0)
    }
}

// ================================
// Console.log

// ================================
// Exports
module.exports = {
    Card,
    PlusTwo,
    PlusOne,
    PlusZero,
    MinusOne,
    MinusTwo,
    Double,
    Empty,
    Bless,
    Curse
}
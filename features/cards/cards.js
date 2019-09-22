// ================================
// 0. Base Cards
// ================================
// 0.0. Basic Modifier Card
class Card {
    constructor() {
        this.name = "Modifier Card",
        this.modifier = null,
        this.shuffle = false,
        this.rolling = false,
        this.special = null,
        this.png = null
    }
};

// --------------------------------
// 0.1. Plus 2
class PlusTwo extends Card {
    constructor() {
        super(),
        this.name = "+2",
        this.modifier = "+2"
    }
}

// --------------------------------
// 0.2. Plus 1
class PlusOne extends Card {
    constructor() {
        super(),
        this.name = "+1",
        this.modifier = "+1"
    }
}

// --------------------------------
// 0.3. Plus 0
class PlusZero extends Card {
    constructor() {
        super(),
        this.name = "+0",
        this.modifier = "+0"
    }
}

// --------------------------------
// 0.4. Minus 1
class MinusOne extends Card {
    constructor() {
        super(),
        this.name = "-1",
        this.modifier = "-1"
    }
}

// --------------------------------
// 0.5. Minus 2
class MinusTwo extends Card {
    constructor() {
        super(),
        this.name = "-2",
        this.modifier = "-2"
    }
}

// --------------------------------
// 0.6. Double
class Double extends Card {
    constructor() {
        super(),
        this.name = "Double",
        this.modifier = "*2",
        this.shuffle = true
    }
}

// --------------------------------
// 0.7. Empty
class Empty extends Card {
    constructor() {
        super(),
        this.name = "Empty",
        this.modifier = "*0",
        this.shuffle = true
    }
}

// --------------------------------
// 0.8. Bless
class Bless extends Card {
    constructor() {
        super(),
        this.name = "Bless",
        this.modifier = "*2"
    }
}

// --------------------------------
// 0.9. Curse
class Curse extends Card {
    constructor() {
        super(),
        this.name = "Curse",
        this.modifier = "*0"
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
class Item {
    constructor(cost, rarity) {
        this.cost = cost;
        this.rarity = rarity;
    }

    use() {
        return console.log('Do the thing!');
    }
}

let mirror = new Item(5, 'common');

class Weapon extends Item {
    constructor(cost, rarity, damage) {
        super(cost, rarity);
        this.damage = damage;
    }

    use() {
        console.log('Slash! Dmg = ' + this.damage);
    }
}

let dragonSlayer = new Weapon(3000, 'epic', 130);

console.log(dragonSlayer.use())
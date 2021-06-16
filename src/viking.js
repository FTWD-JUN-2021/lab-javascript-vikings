// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

let Percy = new Soldier(50, 50);
let Achilles = new Soldier(30, 60);

Achilles.receiveDamage(Percy.attack());
console.log(Percy, Achilles);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };

  battleCry = () => {
    return 'Odin Owns You All!';
  };
}
let Bjorn = new Viking('Bjorn', 3000, 100);
console.log(Bjorn.battleCry());
console.log(Bjorn.receiveDamage(Percy.attack()));
console.log(Bjorn);
// Saxon
class Saxon {}

// War
class War {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

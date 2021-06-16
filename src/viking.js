// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack = () => {
    return this.strength
  }

  receiveDamage = (damage) => {
    this.health -= damage
  }
}

let Percy = new Soldier( 50, 50)
let Achilles = new Soldier( 30, 60)

Achilles.receiveDamage(Percy.attack())
console.log(Percy, Achilles)

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

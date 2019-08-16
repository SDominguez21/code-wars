


// constructor

function Soldier(health, strength){
    this.health = health;
    this.strength = strength;
  
  // attack() method
  
    this.attack = function(){
      return this.strength;
    }
  }
  
  // instatiate an object
  // const soldier1 = viking  
  
  // recieveDamage() method
  
  receiveDamage: function(theDamage) {
  // remove the recieved damage from the health property
  // return nothing (undefined?)
  }
  
  // VIKING 
  
  // A Viking is a Soldier with an additional property, their name. They also have a different receiveDamage() method and new method, battleCry().
  
  // Modify the Viking constructor function, have it inherit from Soldier, reimplement the receiveDamage() method for Viking, and add a new battleCry() method.
  
  // inheritance
  // Viking should inherit from Soldier
  
  // let Soldier = new Viking 
  
  const viking = new Soldier('name', recieveDamage)
  
  
  
  
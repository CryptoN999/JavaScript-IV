/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.


function GameObject(grandchildAttributes){
    this.createdAt = grandchildAttributes.createdAt;
    this.dimensions = grandchildAttributes.dimensions;
   
  }
  
  GameObject.prototype.destroy = 
  function(){
      return 'object was removed from the game.';
  };
      
  function CharacterStats (childAttributes){
    GameObject.call(this,childAttributes);
    this.hp = childAttributes.hp;
    this.name = childAttributes.name;
    
    
  }
  CharacterStats.prototype = Object.create (GameObject.prototype);
  
  CharacterStats.prototype.takeDamage =
  function(){
    return '${this.name} took damage.';
  };
  
   
   
  function Humanoid(attributes){
   CharacterStats.call(this,attributes);
     this.faction = attributes.faction;
     this.weapons = attributes.weapons;
     this.language = attributes.language;
    
   }
   
    Humanoid.prototype = Object.create (CharacterStats.prototype);
   
   
   Humanoid.prototype.greet = 
   function(){
       return '${this.name} offers a greeting in ${this.language}.';
   };
*/
// IS TURNED INTO....

function GameObject(grandchildAttributes) {
    this.createdAt = grandchildAttributes.createdAt;
    this.dimensions = grandchildAttributes.dimensions;
}
GameObject.prototype.destroy =
    function () {
        return 'object was removed from the game.';
    };
function CharacterStats(childAttributes) {
    GameObject.call(this, childAttributes);
    this.hp = childAttributes.hp;
    this.name = childAttributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage =
    function () {
        return '${this.name} took damage.';
    };
function Humanoid(attributes) {
    CharacterStats.call(this, attributes);
    this.faction = attributes.faction;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet =
    function () {
        return '${this.name} offers a greeting in ${this.language}.';
    };

    
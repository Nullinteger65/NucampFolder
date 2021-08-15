class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color,);
        this.element = element;
        
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
  search()
  {
    console.log(`The dark ${this.type} searches for the ${this.element}lands`);
  }
}

 class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

const woodDragon = new Dragon("dragon", "brown", "wood",);


woodDragon.roar();
woodDragon.fly();
woodDragon.search();


 const werewolf1 = new Werewolf("werewolf", "red");
werewolf1.howl();


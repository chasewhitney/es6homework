console.log('js sourced');

class HygienicProduct {
  constructor(smell, maker) {
    this.smell = smell;
    this.maker = maker;
  }
  freshenUp() {
    console.log('You feel fresh and clean');
  }
}

class Deoderant extends HygienicProduct {
  constructor(smell, maker, type){
    super(smell, maker);
    this.type = type;
  }
  freshenUp(){
    super.freshenUp();
  }
  applyUnderArm(){
    console.log('Your armpits are fresh');
  }
}

class BodyWash extends HygienicProduct {
  constructor(smell, maker, consistency){
    super(smell, maker);
    this.consistency = consistency;
  }
  freshenUp(){
    super.freshenUp();
  }
  cleanBody(){
    console.log('You are clean');
  }
}

let toothpaste = new HygienicProduct('mint', 'Colgate');
let theStick = new Deoderant('Ocean Mist', 'Old Spice', 'stick');
let theScrub = new BodyWash('Lavender', 'Old Spice', 'gel');

theStick.applyUnderArm();
theScrub.freshenUp();
theScrub.cleanBody();

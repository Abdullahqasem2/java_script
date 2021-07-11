class Ninja{
	constructor(name,health,speed,strength){
		this.name = name;
		this.health = 0;
		this.strength = 3;
		this.speed = 3;
	}
	sayName(){
		console.log(this.name);
	}

	showStats(){
		console.log(this.name,this.strength,this.health,this.speed);
	}

	 drinkSake(){
	 	this.health = this.health + 10 ;
	 }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();
class Sensei extends Ninja{
	constructor(Wisdom){
		super(Wisdom);
		this.Wisdom = 10;
	}
	speakWisdom(){
		console.log("What one programmer can do in one month, two programmers can do in two months.");
	}
	showStats(){

	}
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
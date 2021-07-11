class Card{
	constructor(name,cost){
		this.name = name;
		this.cost = cost;
	}
}
class Unit extends Card{
	constructor(name,cost,power,res){
	super(name,cost);
	this.power = power;
	this.res = res;
	}
	Attack(target){
		target.res = target.res - this.power;
	}
}
class Effect extends Card{
	constructor(name,cost,text,stat,magnitude){
		super(name,cost);
		this.text = text;
		this.stat = stat;
		this.magnitude = magnitude;
	}
	algo(target){
		target.res = target.res + 3; 
	}
	Rejection(target){
		target.res = target.res - 2;	
	}
	Programming(target){
		target.power = target.power + 2;	
	}
	
}
const RedBeltNinja = new Unit('Red Belt Ninja',3,3,4);
const BlackBeltNinja = new Unit('Black Belt Ninja',4,5,4);
const HardAlgorithim = new Effect('Hard Algorithim',2,'increase targets resilience by 3','resilience',3);
const Rejection = new Effect('Rejection',1,'reduce targets resilience by 2','resilience',2);
const Programming = new Effect('Programming',3,'ncrease targets power by 2','power',2);
HardAlgorithim.algo(RedBeltNinja);
Rejection.Rejection(RedBeltNinja);
Programming.Programming(RedBeltNinja);
RedBeltNinja.Attack(BlackBeltNinja);
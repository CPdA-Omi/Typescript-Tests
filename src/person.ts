class Person {
	private name: string;
	private age: number;
	
	constructor(name: string, age: number){
		this.name = name;
		this.age = age;
	}
	
	tellMyName(){
		console.log(`I ame ${this.name}`);
	}
	
	tellMyAge(){
		console.log(`I am ${this.age} years old`);
	}
}

export default Person;


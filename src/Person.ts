class Person {
	private name: string;
	private age: number;
	
	constructor(name: string, age: number){
		this.name = name;
		this.age = age;
	}
	
	public getName(): string{
		return this.name;
	}
	
	public getAge(): number{
		return this.age;
	}
	
	public tellMyName(){
		console.log(`I am ${this.name}`);
	}
	
	public tellMyAge(){
		console.log(`I am ${this.age} years old`);
	}
}

export default Person;


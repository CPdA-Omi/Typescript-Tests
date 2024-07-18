import Person from "./Person.js";

class BankCustomer extends Person {
	private blueCardCode: string;
	
	constructor(name: string, age: number, blueCardCode: string) {
		super(name, age);
		this.blueCardCode = blueCardCode;
	}
	
	public verifyPinInput(input: string): boolean {
		return (input === this.blueCardCode);
	}
}

export default BankCustomer;


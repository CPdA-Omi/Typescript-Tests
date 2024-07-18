import assert from 'assert';

import BankCustomer from "../src/BankCustomer.js";

function bankCustomerTest(): void {
	const name: string = 'Darius Rochebin';
	const age: number = 57;
	const blueCardCode: string = '3748';
	const customer = new BankCustomer(name, age, blueCardCode);

	assert.equal(typeof customer.getName, 'function');
	assert.equal(typeof customer.getAge, 'function');
	assert.equal(typeof customer.verifyPinInput, 'function');

	assert.equal(customer.getName(), name);
	assert.equal(customer.getAge(), age);
	assert.ok(customer.verifyPinInput(blueCardCode));
}

export default bankCustomerTest;

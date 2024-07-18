import Person from "./src/Person.js";

import bankCustomerTest from "./tests/bankcustomer.test.js";

function poo1(): void {
	const jean = new Person('Jean', 28);
	const marius = new Person('Marius', 21);

	jean.tellMyName();
	jean.tellMyAge();

	marius.tellMyName();
	marius.tellMyAge();
}

function poo2(): void {
	bankCustomerTest();
}

function main(): number {
	poo2();
	return 1;
}

main();


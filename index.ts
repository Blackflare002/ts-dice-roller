const numberOfDice: number = 2;
const diceType: number = 20;
const modifier: number = 5;

console.log(
	`rolling ${numberOfDice}d${diceType}+${modifier}`
);

const roll = () => {
	let total: number = 0;
	for (let i = 0; i <= numberOfDice; i++) {
		const result: number =
			Math.floor(Math.random() * diceType) + 1;
		total += result;
	}
	return total + modifier;
};

console.log(roll());

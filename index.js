var numberOfDice = 2;
var diceType = 20;
var modifier = 5;
console.log("rolling ".concat(numberOfDice, "d").concat(diceType, "+").concat(modifier));
var roll = function () {
    var total = 0;
    for (var i = 0; i <= numberOfDice; i++) {
        var result = Math.floor(Math.random() * diceType) + 1;
        total += result;
    }
    return total + modifier;
};
console.log(roll());

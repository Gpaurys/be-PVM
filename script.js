prompt("Kokia prekės kaina?");


var price = 23.07;
var PVM = 4.8447;
var priceNoPVM = 18.2253;
var minus = price - PVM;
console.log(minus.toFixed(2) + "€ ");

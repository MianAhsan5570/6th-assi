// *************************Qno 15******************************
// Write a ts program to calculate product of digits of a number.
var num: string | null = prompt("Enter any number to find product of digits: ");
var numb: number = Number(num);
var product: number = 1;
while (numb) {
    product = product * (numb % 10);
    numb = Math.floor(numb / 10);
}

console.log("so the product is: ", product);
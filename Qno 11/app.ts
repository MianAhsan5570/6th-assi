// *********************Qno 11****************************
// Write a ts program to find first and last digit of a number.
var num: string | null = prompt("Enter any number: ");
var num1: number = Number(num);
console.log("So the last value is: ", num1 % 10);
while (num1 >= 10) {
    num1 = num1 / 10;
}
var num3: string = String(num1);
console.log("So the first value is: ", parseInt(num3));
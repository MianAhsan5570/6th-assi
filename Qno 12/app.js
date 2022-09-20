// ********************************Qno 12****************************
// Write a ts program to find sum of first and last digit of a number.
var num = prompt("Enter any number: ");
var num1 = Number(num);
var lastNum = num1 % 10;
while (num1 >= 10) {
    num1 = num1 / 10;
}
var num3 = String(num1);
var firstNum = parseInt(num3);
var sum = firstNum + lastNum;
console.log("So the sum of 1st and last digit is: ", sum);

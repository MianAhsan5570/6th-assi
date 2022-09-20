// ********************************Qno 12****************************
// Write a ts program to find sum of first and last digit of a number.
var num: string | null = prompt("Enter any number: ");
var num1: number = Number(num);
 var lastNum:number=num1 % 10;
while (num1 >= 10) {
    num1 = num1 / 10;
}
var num3: string = String(num1);
var firstNum:number=parseInt(num3);
var sum:number=firstNum+lastNum;
console.log("So the sum of 1st and last digit is: ",sum);


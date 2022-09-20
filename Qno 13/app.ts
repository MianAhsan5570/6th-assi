// ********************************Qno 13***************************
// 13. Write a ts program to swap first and last digits of a number.
var num: string | null = prompt("Enter any number: ");
var num1: number = Number(num);
var lastNum: number = num1 % 10;
while (num1 >= 10) {
    num1 = num1 / 10;
}
var num3: string = String(num1);
var firstNum: number = parseInt(num3);
var temp: number = 0;
temp = firstNum;
firstNum = lastNum;
lastNum = temp;
console.log("So the 1st digit after swapping is: ", firstNum);
console.log("So the last digit after swapping is: ", lastNum);


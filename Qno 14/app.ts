// *******************************Qno 14*********************
// Write a ts program to calculate sum of digits of a number.
var num:string|null=prompt("Enter any number to find some of digits: ");
 var numb:number=Number(num);
var sum:number=0;
while (numb) {
    sum =sum + numb % 10;
    numb = Math.floor(numb / 10);
}

console.log("so the sum is: ",sum);
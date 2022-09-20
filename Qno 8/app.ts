// **************************Qno 9*********************************
// Write a ts program to find sum of all odd numbers between 1 to n.
alert("Enter the value upto which u want to find sum of odd numbers(n).");
var n: string | null = prompt("Enter n: ");
var n1: number = Number(n);
var odd: number = 0;
var sum: number = 0;
while (odd <= n1) {
    if (odd % 2 != 0) {
        sum = sum + odd;

    }

}
console.log("So the sum is: ", sum);
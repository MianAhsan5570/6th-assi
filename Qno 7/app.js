// Write a ts program to find sum of all even numbers between 1 to n.
alert("Enter the value upto which u want to find sum of even numbers(n).");
var n = prompt("Enter n: ");
var n1 = Number(n);
var even = 0;
var sum = 0;
while (even <= n1) {
    if (even % 2 == 0) {
        sum = sum + even;
    }
}
console.log("So the sum is: ", sum);

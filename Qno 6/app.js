// *********************************Qno 6******************************
// Write a ts program to find sum of all natural numbers between 1 to n.
var n = prompt("Enter the n for finding sum of natural number upto n");
var n1 = Number(n);
var natural = 0;
var sum = 0;
while (natural <= n1) {
    sum = sum + natural;
    natural++;
}
console.log("So the sum is: ", sum);

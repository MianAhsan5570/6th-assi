// *************************Qno 16***************************
// Write a ts program to enter a number and print its reverse.
var num = prompt("Enter any number: ");
var numb = String(num);
var numRev = [];
var limit = numb.length - 1;
for (var i = 0; i <= limit; i++) {
    numRev[limit - i] = numb[i];
}
console.log("so the reverse of numbers are: ", numRev);

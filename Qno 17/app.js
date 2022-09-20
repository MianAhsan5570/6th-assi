// **************************Qno 17**********************************
// Write a ts program to check whether a number is palindrome or not.
var num = prompt("Enter any number: ");
var numb = String(num);
var nonPalidrome = 0;
var palidrome = 0;
for (var i = 0; i < numb.length; i++) {
    if (numb[i] == numb[numb.length - i - 1]) {
        palidrome++;
    }
    else {
        nonPalidrome++;
    }
}
if (nonPalidrome >= 1) {
    console.log("The number you entered is not palidrome.");
}
else {
    console.log("The number you entered is palidrome.");
}

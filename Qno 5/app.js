// *************************Qno 5*****************************
// Write a ts program to print all odd number between 1 to 100.
var odd = 1;
console.log("So the Odd Numbers are: ");
while (odd <= 100) {
    if (odd % 2 != 0) {
        console.log(odd);
    }
    odd++;
}

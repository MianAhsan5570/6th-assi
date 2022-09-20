// *************************Qno 9********************************
// Write a ts program to print multiplication table of any number.
var tableOf: string | null = prompt("Enter the number u want to see the table of it.");
var table: number = Number(tableOf);
var i = 0;
console.log("So the table is: ");

for (let index = 1; index <= 10; index++) {
    console.log(table, " X ", index, " = ", table * index);


}

// *************************Qno 16***************************
// Write a ts program to enter a number and print its reverse.

var num:string|null=prompt("Enter any number: ");
var numb:string=String(num);
var numRev:String[]=[];
 var limit=numb.length-1;
 for(let i=0; i<=limit ; i++){
    numRev[limit-i]=numb[i];
 }
 console.log("so the reverse of numbers are: ",numRev);
 



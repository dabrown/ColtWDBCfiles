console.log ("Print all even numbers between -10 and 19");
var num = -10;
while (num < 20) {
  console.log(num);
  num++;
}

console.log ("print all even numbers between 10 and 40")
var even = 10;
while (even < 41) {
  console.log(even);
  even+=2;
}
console.log ("Printa all odd numbers between 300 and 333")
var odd = 300;
while (odd <= 333) {
  if(odd % 2 !== 0); {
  console.log(odd);
}
odd+=1;
}

console.log ("print all numbers divisible by 5 and 3 between 5 and 50")
var div = 5;
while (div <= 50) {
  if(div % 5 === 0 && div % 3 === 0){
  console.log(div);}
  div+=1;
}

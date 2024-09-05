// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1)//true
console.log("2"===1)//false by stricrt chaeck did not conver
console.log(null>0)// false;
console.log(null==0)// false;
console.log(null>=0)// true;
console.log(undefined>=0)//false; for all cases
// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0 thats why (3).
//  null >=0 is true and (1)null > 0 is false


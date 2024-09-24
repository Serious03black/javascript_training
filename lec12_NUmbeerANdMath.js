 const score = 400
//  js understand this is nubmer
 console.log(score);//400

// explicitly define number 
 const score1=new Number(100);
 console.log(score1);//[Number: 100]

 console.log(score1.toString().length);//3

// The toFixed() method returns a string representation of a number without using exponential notation and with exactly digits digits after the decimal point. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length.
console.log(score1.toFixed(3));//100.000

const hund=100000;
console.log(hund.toLocaleString('en-IN'));//1,00,000 gives us format by defaault

//=============================+ MATH + ==========================================

console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//gives postive neg to pos op=(4)
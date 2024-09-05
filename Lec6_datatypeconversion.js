// DATATYPE conversion confusion

let score = 33
// if the value come from input when it come we know it is int but some time int score will be string score 
// 
console.log(typeof (score))
// Number
// =====================================================================
// 33 but string
let vlaue=Number(score)
console.log(vlaue)
// 33 now 
let vlaue1=String(score)
// 33 but string
let scor="33aaa";
let value=Number(scor)
console.log(value)
// NaN
let scor1 = "33";
let value1 = Number(scor1);
// 33 
// if convert true then it will be "1" or false "0"

let isLoggedin=1;
let bolleanislog=Boolean(isLoggedin)
console.log(bolleanislog)
// true
let isLoggedin11 = "";
let bolleanislog1 = Boolean(isLoggedin11);
console.log(bolleanislog1);
// if we want to convert empty boolean tit could be false or if we add some string it in it ccould be true let isLoggedin11 = "prathmesh";g

// ****************************+++---+++*************************************
// number and strring addition 

console.log("1"+1)// 11

console.log("1"+"1")// 11

console.log("1"+1+1)// 111 frist considered string then convert all to string string=>num not possilbe thTS MAKE IT STRING
console.log(1+1+"1")// 21 frist considered number thats add the make it num
console.log(1+"1"+1)// 111
// console.log(+true)// 1
// console.log(true+)// error
let a=1;
for(a=1;a<=10;a){
    console.log(++a)
}





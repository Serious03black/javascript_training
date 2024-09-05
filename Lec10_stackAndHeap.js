// stack and heap 

//stack (primitve)
//heap (non primitive)
let myYoutubename="prathmesh uchit"

let anothername=myYoutubename;
// console.log(anothername)//prathmesh uchit
// console.log(myYoutubename);//prathmesh uchit

let userOne = {
  email: "prathmesh",
  name: "prathmeshUchit",
  div: "A",
};// refer image
 
console.log(userOne);//// { email: 'prathmesh', name: 'prathmeshUchit', div: 'A' }

let usertwo=userOne
usertwo.email="uchit"

console.log(usertwo);//// { email: 'uchit', name: 'prathmeshUchit', div: 'A' }
console.log(userOne);//{ email: 'uchit', name: 'prathmeshUchit', div: 'A' }




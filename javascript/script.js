var a="10";
var b=10;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
var num=2;
var result = num%2===0? "even":"odd"
console.log(result);
var mark=82;
var result=(mark>=95)? "0":(mark>=80)? "A+":(mark>=35)? "P":"F"
console.log(result);

function sum(a,b){
    console.log(a+b)
}sum(10,20)

var sum=()=>{
    var a=10;
    var b=20;
    console.log(a+b);
}
sum(); 
let arr=[ 1,2,3,4] 
let arr2=[...arr,5,6,7,8,9,10]
// spread operator
console.log(arr);
console.log(arr2);
var marks=[40,60,90,50,100]
//  destructuring operator
var [m1,m2,m3,m4,m5]=marks;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);








// console.log(a*b)
// console.log(typeof a);
// console.log(typeof b);
// var c=null;
// console.log(typeof c);



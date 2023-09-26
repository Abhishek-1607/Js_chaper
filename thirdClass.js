//------------------------------------------------Variables-------------------------------------------------------//
// js variable is case sensitive so all are different
let myage = 40;
let MYAGE = 30;
let Myage = 20;
// console.log(myage);
// console.log(MYAGE);
// console.log(Myage);
//------------------------------------------------variable name-------------------------------------------------------//
// choosing a variable name
// these are good variable name
let name = "sagar";
name = "Rahul";
console.log(name);
let audio1 = 30;
let myVoiceAudio = '30';
let init = 100;
//------------------------------------------------type of variable-------------------------------------------------------//
let myName = "abc";
console.log(typeof (myName));
let myString = 2 + '' + 2;
console.log(typeof (myString), myString);
let myString2 = '' + 2 + 2;
console.log(typeof (myString2), myString2);
let myString3 = 2 + 2 + '' + 40;
console.log(typeof (myString3), myString3);

// boolen variable
let isActive = true;
console.log(isActive);
let test = 6 < 3;
console.log(test);

// array variable
let myArray = ["a", "b", "c"];
console.log(myArray);

// object variable
let dog = { name: "abhishek", age: "34" };
console.log(dog);
console.log(dog.name);

let myNumber = "500";
console.log(typeof (myName));
myNumber = 500;
console.log(typeof (myNumber));

// changing the variable name of const
// const number=1;
// number=2;
// console.log(number);

const age = { name: "abhishek", add: "noida" };
age.add = "delhi";
console.log(age);
//------------------------------------------------function-------------------------------------------------------//
function car(car_obj) {
    console.log(car_obj);
    car_obj.name = "toyota";
}
// pass a object by parameter
const arr = {
    name: "honda",
    toque: "12000",
    price: "3,00,000"
}
console.log(arr.name);
car(arr);
console.log(arr.name);

// annoynmous function
const square = function (side) {
    return side * side;
}
console.log(square(20));
//  write factorial using annoynmous function
const factorial = function (n) {
    let ans = 1;
    console.log(n);
    if (n == 0 || n == 1) {
        return ans;
    }
    else if (n > 1) {
        for (let j = 1; j <= n; j++) {
            ans = j * ans;
        }
        return ans;
    }
}
// console.log(factorial(5));
//------------------------------------------------ scope-------------------------------------------------------//
// block level (let const)
// global level (var)
// function level
let a = 8;
// easy one wait a moment...
console.log(a);
// put variable in a block
{
    let b = 8;
}
// console.log(b); //saying b is undefined let is a block level
// repeat with var
{
    var c = 8;
}
console.log(c); //output 8 var is a global variable
// function level scope
function motor() {
    console.log(a);
    let d = 5;
}
// motor();
// console.log(d); // d is not defined
//------------------------------------------------ recursion-------------------------------------------------------//
let num = 1;
function show() {
    console.log("count: " + num);
    num++;
    // call same function inside that function
    //Maximum call stack size exceeded to prevent use if case
    if (num < 11430) {
        show();
    }
}
// show(); //showing error after some time Maximum call stack size exceeded
// basic example of recursion
function fact(size) {
    // console.log(size);
    if (size == 0) {
        return 1;
    }
    else{
        return size * fact(size - 1);
    }
}

console.log(fact(4));
// recursion fabonacci series using recusrio
function fabonaci(n){
    if(n==1 ){
        return 0;
    }
    else if(n == 2 || n== 3){
        return 1;
    }
    else{
        return fabonaci(n-1) + fabonaci(n-2);
    }
}
let n=5;
for(let j=1;j<=n;j++){
    document.write(fabonaci(j) + " ");
}
// write recursion for sum of x and y if all the value of from 0 to that number and last y
// basic approach
let firstNo=4;
let second_No=7;
let sum=0;
for(let j=1;j<=firstNo;j++){
    sum =  sum+ j;
}
console.log(sum + second_No);
// basic some more approach
// without using loop we will simple use sum of a natral number n(n+1)/2
let tSum=firstNo * (firstNo+1) / 2;
console.log(tSum + second_No);

// using recursion-------------------------------------
function calcSum(a,b){
    if(a==0){
        return b;
    }
    else{
        return calcSum(a-1,a+b);
    }
}
console.log(calcSum(4,7));
//---------------------multi nested function
function A(x){
    function B(y){
        function C(z){
            console.log(x+y+z);
        }
        C(2);
    }
    B(3);
}
A(1);
// function parameter-------------------------------------
// 1 default parameter
function mult(a,b){
    console.log(a,b);
    if(b==undefined){
        b=1;
    }
    console.log(a * b);
}
mult(5);
// more precise
function mult1(a,b=1){
    console.log(a,b);
    console.log(a * b);
}
mult1(5);
//  rest parameter
function restFun(a,...restObj){
    // console.log(a,);
    // console.log(restObj);
    return restObj.map((item)=> a * item)
}
const arr1=restFun(2,1,3,4);
console.log(arr1);
// shorter parameter-------------------------------------


"use strict";

// -----------------------------------------------------Lexical grammar--------------------------------------------------//
// comments
function comments(){
    // This is single line comment
    console.log("hii i am here");
}
comments();
function multiComment(){
    /*
    This 
    is 
    a
    multiline
    comment */
    console.log("hello " +  /* this is comment for x value */ + "!");
}
multiComment();
// --------------------------------------------------------------------//
// identifier
const decl=1; //valriable declearation
function fn(){} //function declearation
const obj={key:"value"}; //pject declearation
// class declearation
class c{
    #priv="Value"; //private value
}
// --------------------------------------------------------------------//
var a=1;
console.log( "value of a is",a);
var _b=1;
console.log("value of _b is",_b);   //variable can starts with underscode
// var 1b=1;
// console.log("value of 1b is",1b);   //variable can not startwith a number
var b1=1;
console.log("value of _b1 is",b1);  //variable can be alpha-numeric
var $b1=1;
console.log("value of $b1 is",$b1); //variable can starts with underscode or doller

// variable can be defiend as a unicode sequence
const 你好 = "Hello";
console.log(\u4f60\u597d);

// --------------------------------------------------------------------//
// reserve keywords (some keywords are reserve so we can not use it as a variable name or function name)
// function import(){console.log("hii this is me");} //import is a reserve keyword
// --------------------------------------------------------------------//
// literal
console.log(100_100);
// --------------------------------------------------------------------//
const d=1;
console.log(d.toString());
// --------------------------------------------------------------------//
function foo(){
    return
    1 + 1;
}
foo(); //this will not work 
function Goo(){
    // return (
    //     1 + 1
    //     );
    return ( 1 + 1 );
}
Goo();
// --------------------------------------------------------------------//
// Arrow function
const A = (a,b) => console.log(a+b);  // const A = (a,b) and => sould be in same line
// A(1,2);

//------------------------------------------------Expressions-------------------------------------------------------//
let x=3; //
let y="abc";
// console.log("post-fix increment",x++);
// let y=++x;
// console.log("storing post-fix increment value",y);
console.log("pre-fix increment",++x);
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(+y));
// --------------------------------------------------------------------//
let ab=[12,34,56,57];
console.log(...ab);



//------------------------------------------------JavaScript data types and data structures----------------------------------------------//
let fog="2";
let x1=24;
console.log("1st number and 2nd string ",typeof(x1+fog));
console.log("1st string and 2nd number ",typeof(fog+x1));
console.log(fog * x1);

const ax=BigInt(Number.MAX_SAFE_INTEGER);
console.log(ax);

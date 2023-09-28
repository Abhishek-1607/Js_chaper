// ------------------------------------------Loops----------------------------------------------------//
// for loop
// initilize condition and increment
for(let i=0;i<10;i++){
    console.log(" ",i);     //output: 0 1 2 3 4 5 6 7 8 9
}
// can we use const in this
for(const i=0;i<10;i++){
    console.log(" ",i); //const i is updating all time hence we can't use const in that variable erro
}
for(var i=0;i<10;i++){
    console.log(" ",i);
}

// ------------------------------------------slect button DOM example
// const btn=document.querySelector('.btn');
// btn.addEventListener('click',function(){
//     alert("hi");
//     let musifForm=ocument.selectForm.musifForm;
//     console.log(`You have selected this: ${getSelectedData(musifForm)} `);
// })
// const getSelectedData=(data)=>{
//    console.log(data);
// }
// ------------------------------------------Do While
// it will executed atleast once
let j=0;
do{
    j=j+1;
    console.log(j);
}while(j<0);

// ------------------------------------------While
// initilize condition and increment
// write sum of ten natural number
let k=0;
while(k<5){
    console.log(k);
    k++;
}
// find sum of digits of a  number
let n=189;
let sum=0;
while(n>0){
    let p=n%10; //giver the reminder
    sum=sum + p;
    n=Math.floor(n/10);
}
console.log(sum);
//-------------------------------------infinite while loops
// while(true){
//     console.log("hii this is me");
// }
//-----------------------------------------------find sum of digits which are  even place of product at odd
let number=2345;
let sum1=0;
let prod=1;
while(number>0){
    let p= number % 10;
    if( p % 2==0){
        sum1=sum1 + p;
    }
    else{
        prod = prod * p;
    }
    number= Math.floor(number / 10);
}
console.log(sum1,prod);
//-----------------------------------------------find numberis prime or not
 let number2=24;
 let count=0;
 for(let i=1;i<=number2;i++){
    if(number2 % i == 0){
        count++;
    }
 }
 if(count==2){
    console.log(`Number is a Prime Number ${number2}`);
 }
 else{
    console.log(`Number is a not Prime Number ${number2}`);
 }
// in a natural number if n= 3 ----------------------break-------------------------
let p=1;
while(p<5){
    if(p==3){
        break; //it will break the loop and loop will terminate from here
    }
    console.log(p);
    p++;
}
// in a natural number if n= 3 ----------------------continue-------------------------

let q=1;
while(q<5){
    if(q==3){
        continue;
    }
    console.log(q);
    q++;
}

// for in in objects----------------------------------------------- 
const objects={a:1,b:2,c:3};
for(obj2 in objects){        //this iteration is used for objects
    console.log(`${obj2}: ${objects[obj2]}`);
}

const arr=[3,4,5,6];
arr.foo="hello";
for(const i in arr){
    console.log(i); //this will give the index of array
}
for(const i of arr){
    console.log(i);     //tjis will give the value of that array at particular index
}

// for of and for in used for destructuring
const objs={foo:1,bar:2};
for(const [key,val] of Object.entries(objs)){   //this is used for destructuring 
    console.log(key,val);
}

// ------------------------------------------Array----------------------------------------------------//
// pushoperation
const array=[];
array.push("banana","mango","lift");
console.log(array); //["banana","mango","lift"]
array[5]="mango";
console.log(array[5]); //mango
console.log(Object.keys(array));    //this will return the key value ot the array o/p [0,1,2,5]
console.log(array.length);      //it will return the total length 6
const array2=[1,2,3,4,5,6];
for(let i=0;i<10;i++){
    document.write(array2[i] + " "); //this will show the value and rest it shows undefined
}

document.write(array2.length); //this will show the only value which are present in it eg here it is 6

//------------------------------------defining the new array
const arr3=Array();
arr3.push("helo");
console.log(arr3);
//---------------------------------inside a Array() it will only pass a integer value
const arr5=Array(3.4);
console.log(arr5); //array length is not defined as it acceepts only integer value

//------------------------------------array accepting the valie
const wisenArray=Array.of(9.2);
console.log(wisenArray);        //this will return array of 1 length and is 9.2 as element

//------------------------------------populating a array
const arr4=[];
arr4[0]="first";
arr4[1]="second";
arr4[2]="third";
console.log(arr4);      //this will return the array has ["first","second","third"]

//-----------------------------------foreach loop

const colors=["red","green","blue"];
colors.forEach((color)=>{
    console.log(color);         //this will return the element of that array loop
})

//-----------------------------------array concat method
// this will concate the two array and make it to one array
let array1=["1","2","3",4];
let array3=["a","b","c",3];
console.log(array1.concat(array3));     //['1', '2', '3', 4, 'a', 'b', 'c', 3]

//-----------------------------------array join method
// this will join the elenment of array using the value passed in the join parameter
let joinArray=["wind","flow","control"];
console.log(joinArray.join(" - "));     //output will be wind - flow - control

//-----------------------------------array push method
// this will add a element at the last of the array
let pushArray=[1,2];
pushArray.push(3)
console.log(pushArray);

//-----------------------------------array pop method
// this will remove the lest element of the array
pushArray.pop();
console.log(pushArray);

//-----------------------------------array shift method
// this will shift the first 0 index of the element
const shiftArray=[1,2,3];
const shiftElement=shiftArray.shift();
console.log("this is shiftArray",shiftArray);
console.log("this is shiftElement",shiftElement);

//-----------------------------------array unshift method
// this will add tow or more element at the first index and soo on
const unshiftArray=[2,3];
unshiftArray.unshift(6,7);
console.log(unshiftArray);      //output will be [6,7,2,3]

//-----------------------------------array slice method
const animal=["lion","elephant","tiger","peacock"];
//----------1st example
const slicedEle=animal.slice(1);
console.log(slicedEle);         //slice(1) from 1st index it will remove all element 
// output will be ["elephant","tiger","peacock"]

//----------2nd example (if two paramerter are passed)
//  1st from this index to 2nd index -1
const twoSliced=animal.slice(1,3);
console.log(twoSliced);         //output will be  ['elephant', 'tiger']

//----------if negative number is passed
// from last index -1,-2,-3 and so on...
const negativeSlice=animal.slice(-3);
console.log(negativeSlice);         // sfrom that it will fo right and remove all  ['elephant', 'tiger', 'peacock']

//----------if negative number and positiove are passed is passed
const bothSliced1=animal.slice(1,-1);
console.log(bothSliced1); //from 1st index to -1 last index before one 'elephant', 'tiger']

//----------if negative number and positiove are passed is passed (negative first)
const bothSliced=animal.slice(-2,1);
console.log(bothSliced);    //this will return an empty array


//----------what is nothing is passed
const all=animal.slice();
console.log(all);       //this will remove all the element present in the array


//-----------------------------------array at method
// this will find the element of the array at particular index from left to right it will be 0,1,... and from right to left -1,-2
const atArrray=[1,20,3,4,5,6,7,8,90];
const removeAt1=atArrray.at(2);
const removeAt2=atArrray.at(-1);
console.log(removeAt1);  //removeAt1 at 2nd index element is 3
console.log(removeAt2);     //remove elemt is 90

//-----------------------------------array splice method
// splice method is for insert some element at this index to this
const month=["jan","feb","march","april"];
const spliceArray=month.splice(1,0,"dec");  // if 0 is there at 2nd then no replace it will insert at index 1
console.log(month);     //["jan","dec","feb","march","april"]

// if it is not zero then replace that number of element to that is given
const splice2_Array=month.splice(2,1,"oct","Nov","Fri");
console.log(month);     //['jan', 'dec', 'oct', 'Nov', 'Fri', 'march', 'april']

//-----------------------------------array reverse method
// it will reverse the array
const rev_Array=["1","2","5"];
console.log(rev_Array.reverse());       //it will reverse the array

//-----------------------------------array flat method
// it will convert the array of array into a single array
const mult_Array=[2,3,[1,4],[3,4],[5,8]];   //up to inside one array
console.log(mult_Array.flat());

//-----------------------------------array sort method
// it will give the output in a sorted format

let sortArray=[1, 30, 4, 21, 100000];
sortArray.sort();
console.log("hii", sortArray);

//-----------------------------------array index of method
// if will return the index of the element of the aray
const index_Array=["a","b","c","b","b","e"];
console.log(index_Array.indexOf("b"));  // it will return 1
console.log(index_Array.indexOf("b",2));  // this will return the next "b" index after 2nd index
// if the element is not present then it will return -1
console.log(index_Array.indexOf("z"));      //return -1
//-----------------------------------array Lastindex of method
console.log(index_Array.lastIndexOf("b"));  //return the lase element index which are passed by this


//-----------------------------------array flexMap method
const a1=["a","b","c","d"];
const a1_val=a1.flatMap((item)=>[item.toUpperCase(),item.toLocaleLowerCase()])
console.log(a1_val);

//-----------------------------------array filter method
// it will return a new array 
const a2=[1,2,"a","c",5,"v",6];
const a2_val=a2.filter((item)=>typeof(item) === "number")
console.log(a2_val);

//-----------------------------------array find method
// it returns the first elements after find
const a3=[1,2,"a","c",5,"v",6];
const a3_val=a3.find((item)=> typeof(item) === "string")
console.log(a3_val);        //output will be a
//-----------------------------------array findLast method
const a3last_val=a3.findLast((item)=> typeof(item) ==="number")
console.log(a3last_val);        //output is 6

//-----------------------------------array every method
// if typeOf all element in array are same then return true
const a4_val=a3.every((item)=> typeof(item) === "string")
console.log(a4_val);    //it will return false because some are number

//-----------------------------------array some method
// if typeOf atleast one element in array are same then return true
const a5_val=a3.some((item)=> typeof(item) === "string")
console.log(a5_val);    //it will return true because some are number

//-----------------------------------array reduce method

const a6_array=[10,20,30,40];
 const totel=a6_array.reduce((item,currentItem)=> item + currentItem)
 console.log(totel);

//  --------------------------------------------major difference in array

const q1=new Array(2);
console.log(q1.length);         //2
console.log(q1[0]);             // undefined as array is empty
const q2=new Array("2");
console.log(q2.length);          // lenngth 1
console.log(q2[0]);             // "2" string 2 is the element is the array

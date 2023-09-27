//------------------------------------------------Clouser-------------------------------------------------------//
// clouser is like a son can take everything which his father have but vide versa is not true
function myName() {
    let myAge = 35;
    function sonName() {
        let sonAge = 45;
        let myAge = 30;
        console.log("insider son age is :", sonAge);
        console.log(" insider my age is :", myAge);
        // sonName();
    }
    sonName();
    // console.log("OuteSider son age is :",sonAge); this will give an error because sonAge is not access by myName as it is a clouser based
    console.log("OuteSider son age is :", myAge);
}
myName();
// if we call (sonName) here then it will sah it is not defined 
//------------------------------------another method to call a chaining------------------------------------------//
function myName2() {
    let myAge2 = 60;
    sonName2(myAge2);
    console.log("OuterSider myName2 age : ", myAge2);
    // console.log("OuterSider sonAge2 age : ",sonAge2); this will also say error because not defined
}
myName2();
function sonName2(myAge2) {
    let sonAge2 = 11;
    console.log("insider somAge is: ", sonAge2);
    console.log("insider myName2 is: ", myAge2);
}
//------------------------------------------seperate the word by commas------------------------------------------//
function myConcat(seperator, ...restInt) {
    // console.log(seperator,restInt);
    // console.log(arguments.length);
    let result = "";
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + seperator;
    }
    return result;
}
console.log(myConcat(",", "red", "blue", "yellow", "green"));


// js blind function
let persone = {
    name: "suraj",
    getName: function () {
        console.log("i am here");
    }
}
let f = persone.getName.bind(persone);
// setTimeout(f, 2000);
// ----------------------------------------js in dom using (this keyword)-----------------------------------------//
const elements = document.getElementsByTagName("button");
function add_click_function(e) {
    // console.log(this.target);
    // alert(this.innerHTML);
    this.style.backgroundColor = "#000";
    this.style.color = "#fff";
}
for (const element of elements) {
    // console.log(element);
    element.addEventListener('click', add_click_function, false);
}
// ---------------------------------creating a button using js in dom using (this keyword)-----------------------//
const show_btn_1 = document.querySelector('#show_btn_1');
const container = document.querySelector('.container');
show_btn_1.addEventListener('click', function () {
    let new_button = document.createElement('button');
    new_button.innerHTML = "click Me";
    container.appendChild(new_button);
    show_btn_1.disabled = "true";
});
// ------------------------------------------Arrow Function ----------------------------------------------------//
// it is a alternative of traditional function expression
const Hello = () => {
    console.log("hii");
}
Hello();
// ----------------------alternative
const Hello1 = () => console.log("hii"); //as it is a one lineer so we can write it without bracket
// Hello1();
// ----------------------passing a arguments
const Hii = name => console.log("Hello ", name); // Hii =(name) () can ber remove if one parameter is there 
// Hii("suraj");
// ----------------------passing a more then one arguments
const Hii1 = (name1, greeting) => console.log("HII", greeting, name1);
// Hii1("rajesh","GoodMorning");
// ----------------------making an object
let myObject = {
    name2: "abhishek",
    age: 30,
    phone: "1234567890",
    show: function () {
        console.log("hii am a show function");
    }
}
// console.log(myObject.name2); //abhishek
// console.log(myObject.age); //30
// console.log(myObject.phone); // 1234567890
// console.log(myObject.show()); //hii am a show function
// ----------------------have a glitch
let myObject2 = {
    name3: "abhishek",
    age3: 30,
    phone3: "1234567890",
    // show3:function(){
    //     //console.log(`${this.name3} Hii My Age is ${this.age3} and my Phone-Number is : ${this.phone3}`); //working 
    //     setTimeout(function(){
    //         //console.log("hii am a show3 function"); //it is working but lets try as variable in this
    //     console.log(`${this.name3} Hii My Age is ${this.age3} and my Phone-Number is : ${this.phone3}`); //try here 
    //     //undefined Hii My Age is undefined and my Phone-Number is : undefined this will be the output
    //     },1000);
    // }
    // how to solve the upper error  {undefined Hii My Age is undefined and my Phone-Number is : undefined this will be the output}
    // show3: function () {
    //     let that = this; //this is a old method
    //     setTimeout(function () {
    //         console.log(`${that.name3} Hii My Age is ${that.age3} and my Phone-Number is : ${that.phone3}`); //try that
    //         //output fourClass.js:119 abhishek Hii My Age is 30 and my Phone-Number is : 1234567890
    //     }, 1000);
    // }
    // ----------------------more convient method (use arrow function in settimeout it will take this from its lexical parents)
    show3: function () {
        let that = this;
        setTimeout(() => {
            console.log(`${this.name3} Hii My Age is ${this.age3} and my Phone-Number is : ${this.phone3}`);
            //output abhishek Hii My Age is 30 and my Phone-Number is : 1234567890
        }, 2000);
    }
}
// console.log(myObject2.name3);
// console.log(myObject2.age3);
// console.log(myObject2.phone3);
// console.log(myObject2.show3());
// ----------------------make a empty arrow function
const empty = () => { }
// console.log(empty());   //it will return undefined
// ----------------------some operation on array usinf arrow function
const arr = [1, 2, 3, 4, 5];
// ------------------------find sum of array
const sum = arr.reduce((a, b) => {
    return a + b;
});
console.log(sum);
// ------------------------find filter the array value if its value is divisible by 2
const fiter = arr.filter((a) => {
    if (a % 2 == 0) {
        console.log(a);
    }
})
// ----------------------mapping using arrow function
let materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
materials.map((material) => {
    // console.log(material);
})

// using the value for arrow function




// ------------------------------------------Promises----------------------------------------------------//
// used for paralled execution
// basics of promises and rejects
// ----------------------------------------------methods to call a promises
let prom = new Promise(function (resolve, reject) {
    let complate = false; // set a value for catch and try 
    if (complate) {
        resolve("hii i brought data successfully"); //this value will be goes in result
    }
    else {
        reject("oops! sorry something went wrong");  //this value will be goes in error
    }
})
let onFullfillment = (result) => {
    console.log(result);
}
let onRejection = (error) => {
    console.log(error);
}
// now how to call this both resolve and rejct will be called automatically if we call then and catch
prom.then(onFullfillment);
prom.catch(onRejection);
// ----------------------------------------------optimises this code
function Prom(complate) {
    return new Promise(function (resolve, reject) {
        console.log("Fetching the data successfully please wait a moment");    //this will rugging two times fix this 
        // can we get data after some time because api will take some time
        setTimeout(() => {
            if (complate) {
                resolve("hii i brought data successfully"); //this value will be goes in result
            }
            else {
                reject("oops! sorry something went wrong");  //this value will be goes in error
            }
        }, 3000);
    })
}
// let onFullfillment1 = (result) => {
//     console.log(result);
// }
// let onRejection1 = (error) => {
//     console.log(error);
// }
// now how to call this both resolve and rejct will be called automatically if we call then and catch
// Prom(true).then(onFullfillment1);   //pass a argument for accepting
// Prom(true).catch(onRejection1);     //pass a argument for rejecting
// to fix this use
//Prom(true).then(onFullfillment1).catch(onRejection1);   //now this will run only one time
//Prom(true).then(onFullfillment1).catch(onRejection1);  lets remove the function name
Prom(true).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
// -------------------------------------new example-------------------------
let promise1 = new Promise(function (resolve, reject) {
    console.log("hii i am promise and i am in rejected state");
    setTimeout(() => {
        // console.log("hii i am in rejected state");
        // resolve(true);
        // reject(new Error("Hi i am an error"));
    }, 2000);
});
// now want to see the value of that promise
let promise2 = new Promise(function (resolve, reject) {
    console.log("hii i am promise and i am in pending state");
    setTimeout(() => {
        console.log("hii i am in promise state");
        resolve(56);
    }, 5000);
});
// promise2.then((value)=>{
//     console.log("this is value of promise",value);
// })
// ----------------------not to show error in console of promise1
// promise1.catch(()=>{
//     console.log("some error occured in promise1");
// })
// ----------------------how to see both the promise value at a time
let promise_all = Promise.all([promise1, promise2]); //if anyone promise is rejected then will show error only
let promise_all2 = Promise.allSettled([promise1, promise2]); //if anyone this will work if any promises will fails also
let promise_all3 = Promise.race([promise1, promise2]); //it will show who is executed first weather resolve or reject
let promise_all4 = Promise.any([promise1, promise2]); //it will show who is executed first is resolved only
let promise_all5 = Promise.resolve([promise1, promise2]); //it will show who is executed resolved state
// let promise_all6 = Promise.reject([promise1, promise2]); //it will show who is executed rejected state
promise_all5.then((value) => {
    console.log(value);
})
// console.log(promise1,promise2);
console.log("hii i am from 1");
setTimeout(function () {
    // console.log("hii i am from 2");
}, 2000);
console.log("hii i am from 3");
// console.log(promise);

// ------------------------------------------------REAL LIFE EXAMPLE---------------------------
// get data using ajax
const show_data = document.querySelector('.show_data');
show_data.addEventListener('click', function () {
    getData();
});
function getData() {
    return new Promise(function (resolve, reject) {
        console.log("Fetching the data for from api");
        setTimeout(() => {
            const url = "https://jsonplaceholder.typicode.com/posts";
            const show_row_data = document.querySelector('.show_row_data');
            fetch(url).then((response) => response.json()).then((data) => {
                getList(data);
            })
            const getList = (results) => {
                results.map((result,key) => {
                    console.log(result);
                    const child_div = document.createElement('div');
                    const name = document.createElement('h2');
                    const phone = document.createElement('p');
                    const id = document.createElement('p');
                    id.classList.add('key_id');
                    child_div.classList.add('single_div');
                    show_row_data.appendChild(child_div);
                    child_div.appendChild(id);
                    child_div.appendChild(name);
                    child_div.appendChild(phone);
                    id.innerHTML=`${result.id}`;
                    name.innerHTML=`Title : ${result.title}`;
                    phone.innerHTML=`Phone : ${result.body}`;
                    // address.innerHTML=`Address : ${result.address}`;
                })
            }
        }, 1000);
    })
}
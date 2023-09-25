//------------------------------------------------Classes-------------------------------------------------------//
//###### Classes example 1
class Railwayform{
    submitForm(){
        alert("hii i am subiting the form");
    }
    cancleForm(){
        alert(this.name+ "," + "hii i am cancelling the form"+","+ "train no is :"+ this.trainno);
    }
    fillForm(name,trainno){
        this.name=name;
        this.trainno=trainno;
    }
}
// let form_class1=new Railwayform();
// let form_class2=new Railwayform();
// form_class1.fillForm("suraj",220956);
// form_class2.fillForm("rajesh",121345);
// form_class1.submitForm();
// form_class1.cancleForm();
// form_class2.cancleForm();
// issue was if a person did not filled the form and click on submit form then i will show undefined and submitted
//------------------------------------------------Classes with Constructor---------------------------------------//
//###### Classes example 2
// so we use constructor
class RailwayformConst{
    constructor(name,trainno){
        this.name=name;
        this.trainno=trainno;
    }
    submitFormConst(){
        alert(this.name+ "," + "hii i am subiting the form"+","+ "train no is :"+ this.trainno);
    }
    cancleFormConst(){
        alert(this.name+ "," + "hii i am cancelling the form"+","+ "train no is :"+ this.trainno);
    }
}
// let form_construcot1=new RailwayformConst("Rahul",123456);
// let form_construcot2=new RailwayformConst("suresh",990234);
// form_construcot1.submitFormConst();
// form_construcot2.submitFormConst();
// form_construcot.cancleFormConst();
//------------------------------------------------Classes with Constructor---------------------------------------//
//###### Classes example 3
class Button{
    constructor(value){
        this.value=value;
    }
    click(){
        alert(this.value);
    }
}
let button=new Button("i am a button");
// setTimeout(button.click(),4000);  this will invoke just after the dom load 
// setTimeout(()=>button.click(),4000);  //this will invoke after 4 milli second due to the function in settimeout
//------------------------------------------------using class and object ---------------------------------------//
//###### Classes example 4
// question : change the person salary
class emp{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    changesalary(value){
        this.salary=value;
    }
}
// let p=new emp('1','suraj','30,000');
// console.log(p);
// p.changesalary('55,000');
// console.log(p);
//###### Classes example 5 a little conditional changes if salary greater then last it will be that other wise first One
class emp1{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    changesalary1(value){
        console.log(this.salary);
        if(this.salary < value || this.salary === undefined){
            this.salary=value;
        }
    }
}
// let p=new emp1('1','rajsh','30,0000);
let p=new emp1('1','rajsh'); //this will show undefined for salary
console.log(p);
p.changesalary1('45,000');
console.log(p);
//------------------------------------------------FInal timer Example using ---------------------------------------//
//###### Classes example 6
class Clock{
    constructor({template}){
        this.template=template;
    }
    render(){
        let date=new Date();
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let second=date.getSeconds();
        if(hours<10){
            hours= '0' + hours;
        }
        if(minutes<30){
            minutes= '0' + minutes;
        }
        if(second<30){
            second= '0' + second;
        }
        // console.log(hours,minutes,second);
        let output=this.template.replace('h',hours).replace('m',minutes).replace('s',second);
        // console.log(output);
    }
    stop(){
        clearInterval(()=>this.timer);
    }
    start(){
        this.render();
        this.timer=setInterval(()=>this.render(),1000);
    }
}
let clock=new Clock({template:'h:m:s'});
clock.start();
//-----------------------------------------------------methods----------------------------------------------------//
// for more 
class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    getArea(){
        this.calcArea();
        // alert(this.height * this.width);
    }
    calcArea(){
        alert("this is coming from calcArea"+ " "+ (this.height * this.width));
    }
}
// let area=new Rectangle(8,10);
// area.getArea();
//-----------------------------------------------------Using Static----------------------------------------------------//
class Name{
    // make a constructor
    constructor(name){
        // this.name=name;
        this.name=Name.captalize(name); //3b this is the last method  user other function here only
    }
    walk(){
        //alert("Animal "+ this.captalize(this.name) +" is walking"); //1 this will not work as it will be onle accessible by the class
        //alert("Animal "+ Name.captalize(this.name) +" is walking"); //2 this will work but it is not a best case
        alert("Animal "+ this.name +" is walking");                   //3a this will work but it is not a best case
    }
    // now i want to make a function which will used by the class but not using thie object of the class i will use as a static
    static captalize(name){
        return name.toUpperCase();
    }
}
// let animal=new Name("elephant");
// animal.walk();
// animal.captalize(); //this will not work as captalize is static and it is only accessible by classs
//------------------------------------------------Using Static second example--------------------------------------------//
// example 1 (shortest distance)
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static displayName="point";
    static getDistance(a,b){
        console.log("variable for a: ", a);  //p1 will be {x:2,x:3};
        console.log("variable for b: ", b);  //p2 will be {x:4,x:5};
        const dx=a.x-b.x;
        const dy=a.y-b.y;
        alert(Math.hypot(dx,dy));
    }
}
let p1=new Point(2,3);
let p2=new Point(4,5);
// now output of p1 will be {x:2,x:3};
//alert(p1.displayName()); ///as this will not work because variale is a static so we have to access using classNamE
// alert(Point.displayName); //point
// // alert(Point.getDistance(p1)); this will return p1 will be {x:2,x:3};
// Point.getDistance(p1,p2);
//------------------------------------------------Using Static second example--------------------------------------------//
// example 1 (find perimeter of triangle using points)
class Perimeter{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    static getPerimeter(p,q,r){
        let Dpqx=p.a-q.a;
        let Dpqy=p.b-q.b;
        let Dqrx=q.a-r.a;
        let Dqry=q.b-r.b;
        let Dprx=p.a-r.a;
        let Dpry=p.b-r.b;
        let P=Math.hypot(Dpqx,Dpqy);
        let Q=Math.hypot(Dqrx,Dqry);
        let R=Math.hypot(Dprx,Dpry);
        let sum=P+Q+R;
        console.log(sum);
        console.log(Math.hypot(Dpqx,Dpqy));
        console.log(Math.hypot(Dqrx,Dqry));
        console.log(Math.hypot(Dprx,Dpry));
    }
}
let x=new Perimeter(0,0);
let y=new Perimeter(3,0);
let z=new Perimeter(3,4);
Perimeter.getPerimeter(x,y,z);
//------------------------------------------------Using Static Field Declarations-----------------------------------------//
class Rectangle2{
    height=0;
    weight;
    constructor(height,weight){
        this.height=height;
        this.weight=weight;
    }
}
let heigh=new Rectangle2(20,30);
console.log(heigh);
//--------------------------------------------------------Inheritence----------------------------------------------------//
class A{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log(`${this.name} is walking`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}
// let a=new A("suresh");
// a.walk();
// a.sleep();
// now i want to inherit the property of A in B
class B extends A{
    constructor(name){
        super(name);
    }
    run(){
        console.log(`${this.name} is running`);
    }
}
let b=new B("suresh");
b.run(); //This will say undefined is running if we will not  use super(name) in the constructor of extended class
 //------------------------------------------------------Variables------------------------------------------------------//
//  it is like a container for value
 myname="krish";
 function logName(){
    console.log(myname);
 }
 logName();
 var myname;

//  console.log(typeof('2' + 2 + 2));
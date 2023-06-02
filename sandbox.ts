// var character="mario";
// console.log(character);

// var inputs =document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach(element => {
//     console.log(element);
// });

// let character= 'mario';
// let age=30;
// let isBlackBelt=false;
// character='luigi';
// age=40;


// const circ=(diameter: number)=>{
//     return diameter =Math.PI * diameter;
// }
// console.log(circ(3));






//@arrays

// let names: string[]=["luigi","mario","yoshi"];
// names.push('toad');

// let numbers: number[]=[10,20,30,40];
// numbers.push(50)

// numbers.push("abhi"); //error it takes only number type

// numbers[1]=90;
// // numbers[1]="abhi";  @error














// //@mixed arrays

// let mixed =['ken',10,{}];
// mixed.push(20)
// mixed.push('abhi')
// mixed.push({id: "abhi"})

// mixed[0]=199; //this is fine









// //@objects

// let abhi={
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }
// abhi.age=23;

// abhi.name="abhishek";


// abhi.age="twwenty three" @error
// abhi.skills=['html',"css","sass","js"] @ error















 
//@explicit types

// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// // age="abhi";@error
// age=23;
// // isLoggedIn=25 @error

// isLoggedIn=true;







//@ explicit arrays

// let abhis: string[]=[];
// abhis.push('shaun')
// abhis=["abhi","pax"];















//@explicit union types


// let mixed:(string |number)[]=[];
// mixed.push("hello");
// mixed.push(20);
// // mixed.push(false);@error
// console.log(mixed)

// let uid: string | number;

// uid='123';
// uid=123;















//@objects


// let  abhiOne: object;
// abhiOne={name: 'yoshi',age:30}
// abhiOne=[] //array is type of object

// let ninjaTwo:{
//     name: string;
//     age: number;
//     beltColour: string;
// }

// ninjaTwo={name: "mario", age:90,   beltColour: "balck"}










//@dynamic any

// let age: any=25;
// console.log(age);


// age=true;

// console.log(age);
// age={name: 'luigi'};
// console.log(age);


// let mixed: any[]=[];

// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);

// // let ninja={name: any,age: 25};
// ninja={name: 'yoshi',age:25};
// console.log(ninja);













































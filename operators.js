// arithmetic operators
// +,-,*,/,%
// increment or decrement operators
// ++,--
//assignment operator
//=,+=,-=,*=,/=
// string/concatenation 
//+
// template literals
// ``=>{}
//comparison operators
// <,>,<=,>=,==,!=
//logical operators
//&&,||,!==
//conditional or ternary operator
//(exp)?true:false
//null colleaching
//??
//object destruction
//spread operator
//rest operator



let a= 10;
let b=30;

const c=a/b
const d=a%b

a++//a=a+1,11 post assign
console.log(a)//11
++a//a=a+1 pre assign
console.log(a)//12

console.log(a++)//12
console.log(++a)//14


let x=10;
let y='10'

const z=x+y
console.log(z)//1010

let name="ram"

// let html="dear "+name+"</br>"
let html=`dear ${name} </br>`
html +="" //append

a=5
b='5'
console.log(a>b)//false
console.log(a<b)//false
console.log(a==b)//true
console.log(a===b)//it checks data type as well as data in variable


const userRegister={
    Role:'Student'//user
}
// ((userRegister.Role!=='admin')&&(userRegister.Role!=='student')&&(userRegister.Role!=='teacher'))
//true && true && true=>true
//true && false && true=>false

//true || false || false =>true
//false || false || false =>false

//!true=false
//!false=true


let role=(userRegister.Role==='admin')?"admin":(
    (userRegister.role==='student'?'student':
         "user"
    )
)
//return admin,user

let userole=userRegister.role??'user'



const userData={
    name:"User one",
    email:"user@gmail.com",
    address:"bharatpur-11",
    phone:"98000000000"

}
const adminData={
    ...userData,
    role:"admin"

}

//...rest operator
let {name:fullname,address} =userData//object destruct

// let fullname=userData.name
// let address=userData.address
//let remaining={
    // email: userData.email
    // phone: userData.phone
// }


const user={
    name: "ram"
}
console.log(user.name)//ram

// const user1=user //object assignment, not a value assignment, so user1 & user will point to same memory location
// user1.name="updated name";
// console.log(user1.name)//updated name
// console.log(user.name)//updated name

//to avoid above problem we use let user1={...user}
let user1={...user}
user1.name="updated name";
console.log(user1.name)//updated name
console.log(user.name)//updated name
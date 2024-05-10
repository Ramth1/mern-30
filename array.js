const { all } = require("axios")

let name_1="person name"
let email_1="name@person.com"
let address_1="kathmandu"
let phone_1="98000000"

//100 employees
let employee_1=["person name","name@person.com","kathmandu1","+97 98000000"]

// console.log(employee_1[0])
// console.log(employee_1[1])
// console.log(employee_1[2])

//single dimensional array
//multi dimensional array
let all_employee = [
    ["person1 name","name1@person.com","kathmandu1","+97 98000000"],
    ["person2 name","name2@person.com","kathmandu2","+97 98020000"],
    ["person3 name","name3@person.com","lalitpur","+97 98000100"],
]
console.log(all_employee[1][1])

let user_1=["person1 name","name1@person.com","kathmandu1","+97 98000000"]
let user_2=["person2 name","+97 98000000","kathmandu1","name2@person.com"]

// function oriented and program oriented
//class based and prototype based

//objects data always contains key:value
// keys are custom defined
// key can be alphanumeric value

let user_4 = {
    name: "person name",
    email: "email@gmail.com",
    address:"kathmandu",
    phone:"+97 98000000"
}
let user_5 = {
    email: "email@gmail.com",
    name: "person name",
    address:"kathmandu",
    phone:"+97 98000000"
}

// console.log(user_4) //{}=>object
// console.log(user_4['name'])

const allUsers=[
    {name: "person name",email: "email@gmail.com",address:"kathmandu",phone:"+97 98000000",designation:"CEO"},
    {name: "person2 name",email: "email2@gmail.com",address:"kathmandu2",phone:"+97 98120000",designation:"CTO"}
    
]
// console.log(allUsers[0].designation)
// console.log(allUsers[1]["designation"])

//array
//inset operation
let allEmployees=[]
//store
//default insert is always at last
allEmployees.push("populate at last"); //at 0 index
allEmployees.push("insert this at 1 "); //at 1 index

//always at top
allEmployees.unshift("always at 0"); //0, existing 0=>1=>2

//existing index
//0,1,2
allEmployees[1]="I am replacement of 1"; //replace existing

//0,1,2 ==>1-2 in
allEmployees.splice(1,1,"inserted successfully")

//0,1,2,3,<4-8>9
allEmployees[9]="Random index value insert"
// console.log(allEmployees)

//read
const first=allEmployees.shift()


const last=allEmployees.pop()

//const index=allEmployees.splice(10,20) also delete data from it

const index=allEmployees.slice(1,5)//read data from 1 to 4 but slice doesnt delete data from it

//create a javascript program to store the product information in the form of array of object. illustrate the different usecases of javascript array functions inorder to insert read and delete the elements in that array atleast use 10 different objects in that array, your product should contain atleast name, price, category and brand information.

let product = []
let product1={
    name:"iphone 14",
    price:"120000",
    category:"mobile",
    brand:"Apple"
}

let product2={
    name:"samsung s23 ultra",
    price:"140000",
    category:"mobile",
    brand:"Samsung"
}
let product3={
    name:"red jacket",
    price:"1400",
    category:"Clothe",
    brand:"HUBA"
}
let product4={
    name:"Ferari",
    price:"140000",
    category:"Car",
    brand:"Ferari"
}
let product5={
    name:"red jacket",
    price:"1400",
    category:"Clothe",
    brand:"HUBA"
}
let product6={
    name:"Rolex",
    price:"14000",
    category:"Watch",
    brand:"Rolex"
}
let product7={
    name:"Bag",
    price:"1000",
    category:"Clothe",
    brand:"Nike"
}
let product8={
    name:"Gold Star",
    price:"2400",
    category:"Shoe",
    brand:"Gold Star"
}
let product9={
    name:"red jacket",
    price:"1400",
    category:"Clothe",
    brand:"HUBA"
}
let product10={
    name:"Dell",
    price:"14000",
    category:"Laptop",
    brand:"Dell"
}


product.push(product1,product2,product3,product4,product5,product6,product7,product8,product9,product10)
// console.log(product)
// console.log(product.push(product1.name))
console.log(product)

// ways to declare a function
// function addNumber(a,b){
//     const c=a+b
//     return c;
// }

// const addNumber1=function (a,b){
//     const c=a+b
//     return c;
// }

// // arrow function
// const addNumber2 = (a,b) =>{
//     const c=a+b
//     return c
// }
// console.log(addNumber(8,8))
// console.log(addNumber1(3,4))
// console.log(addNumber2(5,3))

// const calculate ={
//     addNumber: function(a,b){
//         const c=a+b
//         return c
//     },
//     addNumber1: function(a,b){
//         const c=a+b
//         return c
//     }
// }

// console.log(calculate.addNumber(1,2))
// console.log(calculate.addNumber1(3,2))


// ways to declare async
// a. time delay
// b. promise return
// 

// a. async-await async
// promise return 
// slow internet

//create a js function to get the sum of numbers in an array.

// const getSum = (data) =>{
//  let n=data.length
//  let output=0
//  for(let i=0;i<n;i++){
//      output=output+data[i]
//  }
//  return output
// }


// const getSum = (data) =>{
//     let sum=0
//     for(let a of data){
//         sum +=a
//     }
//     return sum
//    }
// const numbs=[1,2,3,4,5,6,7,8,9]
// const result=getSum(numbs);
// console.log(result);


// const getSum = () =>{
//     let sum=0
//     for(let a of numbs){
//         sum +=a
//     }
//     return sum
//    }
// const numbs=[1,2,3,4,5,6,7,8,9]
// const result=getSum();
// console.log("the sum is:",result);
const getSum = () =>{
    
    for(let a of numbs){
        sum +=a
    }
    // return sum
   }
const numbs=[1,2,3,4,5,6,7,8,9]
let sum=0
getSum();
console.log("the sum is:",sum);
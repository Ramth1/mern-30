// const func1 =()=>{
//     console.log("I am in function1")
// }
// const func2 =()=>{
//     console.log("I am in function2")
// }
// const func3 =()=>{
//     console.log("I am in function3")
// }


// setTimeout(func1,3000) //3sec
// setTimeout(func2,1000) //1sec
// setTimeout(func3,2000) //2sec


// func1()
// func2()
// func3()

// console.log("I am the last line")

// those who create delay produce promise 





// let time=1000
// for(let i=1;i<=10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },time*i)
// }





// let i=1
// const timer=setInterval(()=>{
//     console.log(i++)
//     if(i>10){
//         clearInterval(timer)
//     }
// },1000)


const clockTime =()=>{
    const date=new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const second=date.getSeconds();

    const time=hours+""+minutes+""+second

    document.getElementById('clock').innerHTML=time
}
setInterval(clockTime,1000)
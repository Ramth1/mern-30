// for(let i=1; i<=100;i++){
//     console.log(i)
// }
// let num=40
// if(num%3==0){
//     console.log("fizz")
// }
// else if(num%5==0){
//     console.log("buzz")
// }
// else if(num%5==0 && num%3==0){
//     console.log("fizzbuzz")
// }

for(let i=1;i<=100;i++){
    if(i%3 ==0 && i%5==0){
        console.log("fizzbuzz")
    }
    else if(i%3==0){
        console.log("fizz")
    }
    else if(i%5==0){
        console.log("buzz")
    }
    console.log(i)
}
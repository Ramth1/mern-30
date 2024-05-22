// let i=11;
// //do-while
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10)


// //while
// i=1;
// while(i<=10){
//     console.log(i)
//     i++
// }

//for 
// for(i=1;i<=10;i++){
//     console.log(i)
// }


// for(let i=1;i<=5;i++){
//     let output='';
//     for(let j=1;j<=i;j++){
//         output +=j +" "
//     }
//     console.log(output)
// }

for(let i=5;i>=1;i--){
    let output='';
    for(let j=1;j<=i;j++){
        output +=j + " "
    }
    console.log(output)
}



// const n = 5;
// for (let i = 1; i <= n; i++) {
//     let arr = [];
//     let count = 1;
//     for (let j = 1; j <= 2 * n; ++j) {
//         if (i + j >= n + 1 && (i >= j - n + 1)) {
//             arr.push(count);
//             count++;
//         } else {
//             arr.push(' ');
//         }
//     }
//     console.log(arr.join(' '));
// }
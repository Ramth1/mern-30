// inserting elements in an array at the end

// function insertSorted(arr,n,val,capacity){
//     var i=1
//     if(pos>=capacity)
//          return n;
//     arr[pos]=val
//     return n+1;
    
// }
// let arr=new Array(20)
// arr[0]=1
// arr[1]=2
// arr[2]=3
// arr[3]=4
// arr[4]=5
// arr[5]=6

// let n=6
// let val=7
// let capacity=20

// console.log("before insertion")
// for(i=0;i<n;i++){
//     console.log(arr[i])
// }
// n=insertSorted(arr,n,val,capacity)
// console.log("after insertion")
// for(i=0;i<n;i++){
//     console.log(arr[i])
// }


// inserting elements in an array at any position

// function insertElement(arr,val,pos,n){
    
//     for(i=n;i>=pos;i--){
//         arr[i+1]=arr[i]
//         if(i==pos){
//            arr[pos]=val 
//         }
        
//     }
// }

// let arr=new Array(10)
// arr[0]=1
// arr[1]=2
// arr[2]=3
// arr[3]=4
// arr[4]=5
// arr[5]=6

// let n=6
// let val=7
// let pos=4

// console.log("before insertion at any position")
// for(let i=0;i<n;i++){
//     console.log(arr[i])
// }

// insertElement(arr,val,pos,n)
// n+=1

// console.log("after inserting at any position")
// for(i=0;i<n;i++){
//     console.log(arr[i])
// }






// inserting elements in a sorted array

function insertElement(arr,n,capacity,val){
    if(n>capacity){
        return n
    }
    for(i=n;i>=0 && arr[i]>val;i--){
        
            arr[i+1]=arr[i]
        
        arr[i]=val
    }
    return (n+1);
}
let arr=new Array(10)
arr[0]=1
arr[1]=10
arr[2]=11
arr[3]=12
arr[4]=14
arr[5]=18

let val=13
let capacity=20
let n=5

console.log("before insertion")
for(let i=0;i<n;i++){
    console.log(arr[i])
}

n=insertElement(arr,n,capacity,val)
console.log("after insertion")
for(i=0;i<n;i++)
{
    console.log(arr[i])
}















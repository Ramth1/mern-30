// function searchOperation(arr,val,n){
//     for(let i=0;i<n;i++){
//         if(arr[i]==val)
//             return i
//     }

// }
// let arr= new Array(5)
// arr[0]=1
// arr[1]=12
// arr[2]=13
// arr[3]=14
// arr[4]=15
// arr[5]=16

// let val=16
// let n=5
// let pos=searchOperation(arr,val,n)
// console.log("the element is found at position",pos)



// insert at the end
// function insertElement(array,value,n1,capacity){
//     if(n1>capacity)
//         return n1
//     array[n1+1]=value
// }
// let array=new Array(10)
// array[0]=1
// array[1]=2
// array[2]=3
// array[3]=4
// array[4]=5
// array[5]=6

// let value=7
// let n1=6
// let capacity=10
// console.log("before insertion")
// for(let i=0;i<5;i++){
//     console.log(array[i])
// }
// insertElement(array,value,n1,capacity)
// n1+=1
// console.log("after insertion")
// for(i=0;i<n1;i++){
//     console.log(array[i])
// }


function binarySearch(arr,low,high,key){
    let mid=(high+low)/2
    if(high<low){
        return -1
    }
    
    else if(key==arr[mid]){
        return mid
    }
    else if(arr[mid]>key){
        return binarySearch(arr,low,mid-1,key)
    }
    return binarySearch(arr,mid-1,high,key)
}

let arr=[1,2,4,12,15,17]
let n=arr.length
let key=12

console.log("element found at index",binarySearch(arr,1,n,key))
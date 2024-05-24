function searchOperation(arr,val,low,high){
    mid=(low+high)/2
    if(high<low){
        return -1
    }
    if(arr[mid]==val){
        return mid
    }
    if(arr[mid]<val){
        return searchOperation(arr,val,mid+1,high)
    }
    return searchOperation(arr,val,low,mid-1)

}
function deleteOperation(arr,val,n){
    let pos=searchOperation(arr,val,0,n-1)

    if(pos==-1){
        console.log("no elements found")
    }
    for(let i=pos;i<n-1;i++){
        arr[i]=arr[i+1]
    }
    return n-1
}
let arr=[1,2,3,4,5,6,7]
let val=4
let n=arr.length

console.log("before deletion")
for(let i=0;i<n;i++){
    console.log(arr[i])
}
n=deleteOperation(arr,val,1,n)
console.log("after deletion")
for(i=0;i<n;i++){
    console.log(arr[i])
}
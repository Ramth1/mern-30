//inserting elements in a sorted array 

function insertSorted(arr,n,key,capacity){
    var i;
    for(i=n-1;(i>=0 && arr[i]>key);i--){
        arr[i+1]=arr[i]
    }
    arr[i+1]=key
    return (n+1)
}
var arr= new Array(20);
arr[0]=12;
arr[1]=15;
arr[2]=19;
arr[3]=20;
arr[4]=26;
arr[5]=40;

var capacity=arr.length;
var n=6;
var key=23;

console.log("array before insertion");
for(i=0;i<n;i++){
    console.log(arr[i]);
}
n=insertSorted(arr,n,key,capacity);
console.log("array after insertion");
for(i=0;i<n;i++){
    console.log(arr[i])
}




// inserting element at specific element
function insertSort(arr,n,x,pos){
    var i;
    for(i=n-1;(i>=pos);i--){
        arr[i+1]=arr[i]
    }
    arr[pos]=x;
}
var arr= Array(10).fill(0)
arr[0]=10
arr[1]=13
arr[2]=16
arr[3]=18
arr[4]=20
arr[5]=30
var pos=3;
var n=6;
var x=40;
console.log("before insertion")
var i;
for (i=0;i<n;i++){
    console.log(arr[i]);
}
insertSort(arr,n,x,pos)
n+=1;
console.log("after insertion")
for (i=0;i<n;i++){
    console.log(arr[i])
}


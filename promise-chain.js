const func1 =()=>{
    return new Promise((resolve, reject)=>{
        let status=true;
        if(status){
            resolve("I am resolved of func1")
        }else{
            reject("I am reject of func1")
        }
    })
}
const func2 =()=>{
    return new Promise((resolve, reject)=>{
        let status=true;
        if(status){
            resolve("I am resolved of func2")
        }else{
            reject("I am reject of func2")
        }
    })
}
const func3 =()=>{
    return new Promise((resolve, reject)=>{
        let status=true;
        if(status){
            resolve("I am resolved of func3")
        }else{
            reject("I am reject of func3")
        }
    })
}
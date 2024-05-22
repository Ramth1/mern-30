// const func1 = () =>{
//     console.log("I am function 1")
// }
// const func2 = () =>{
//     console.log("I am function 2")
// }
// const func3 = () =>{
//     console.log("I am function 3")
// }
// func1()
// func2()
// func3()



const func1 = () =>{
    //clouser function
    const func2 = () =>{
        //clouser function
        const func3 = () =>{
            console.log("I am function 3")
        }
        console.log("I am function 2")
        func3()
    }
    console.log("I am function 1")
    func2()
}


func1()

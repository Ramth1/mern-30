const product=[
    {name:"product one",price:100,discount:10},
    {name:"product two",price:2000,discount:3},
    {name:"product three",price:34000,discount:13},
]
product[4]={name:"product four",price:3000,discount:8}


// console.log("product name:", product[0].name)
// console.log("product price Npr:", product[0].price)
// console.log("product discount:", product[0].discount)
// var after_discount=product[0].price-product[0].price*product[0].discount/100
// console.log("product after discount:",after_discount)
// console.log("---------------------****-------------")


// console.log("product name:", product[1].name)
// console.log("product price Npr:", product[1].price)
// console.log("product discount:", product[1].discount)
// var after_discount=product[1].price-product[1].price*product[1].discount/100
// console.log("product after discount:",after_discount)
// console.log("---------------------****-------------")

// console.log("product name:", product[2].name)
// console.log("product price Npr:", product[2].price)
// console.log("product discount:", product[2].discount)
// var after_discount=product[2].price-product[2].price*product[2].discount/100
// console.log("product after discount:",after_discount)
// console.log("---------------------****-------------")


// let n=product.length
// for(let i=0;i<n;i++){
//     var after_discount=product[i].price-product[i].price*product[i].discount/100
//     console.log("product after discount",after_discount)
//     console.log("---------------------****-------------")
// }



// for(let i=0;i<product.length;i++)

// for(let i in product){
//     var after_discount=product[i].price-product[i].price*product[i].discount/100
//     console.log("product after discount",after_discount)
//     console.log("---------------------****-------------")
// }


// for(let elem of product){
//     if(elem){
//         var after_discount=elem.price-elem.price*elem.discount/100
//         console.log("product after discount",after_discount)
//         console.log("---------------------****-------------")
//     }
    
//}


// create an array of students having name, email, marksheet as an object data
//  store alleast 10 student data on that array
//  consider 500 as total score.
// print each student's precentage and division
// >=80==> distinction
// >=60 <80==>first
// >=45 <60==>second
// >=35 <45==>third
// <35 ===>sorry! you are failed

const student=[
    {name:"ram",email:"r@gmail.com",marksheet:450},
    {name:"laxman",email:"l@gmail.com",marksheet:300},
    {name:"hari",email:"h@gmail.com",marksheet:200},
    {name:"prabin",email:"p@gmail.com",marksheet:100},
    {name:"pradip",email:"p1@gmail.com",marksheet:450},
    {name:"shyam",email:"s@gmail.com",marksheet:350},
    {name:"ss",email:"s1@gmail.com",marksheet:250},
    {name:"dd",email:"d@gmail.com",marksheet:55},
    {name:"ff",email:"f@gmailc.om",marksheet:401},
    {name:"dd",email:"d1@gmail.com",marksheet:400},

]
// let size=student.length
// let division=0
// let percentage=0
// for(let i=0;i<size;i++){
    // console.log("Student name:",student[i].name)
    // 
//     percentage=student[i].marksheet/500*100
//     if(percentage>=80){
//         console.log("your percentage is:",percentage,"and you have secured distinction")
//     }
//     else if(percentage>=60 && percentage<80){
//         console.log("your percentage is:",percentage,"and you have secured first division")
//     }
//     else if(percentage>=40 && percentage<60){
//         console.log("your percentage is:",percentage,"and you have secured second division")
//     }
//     else if(percentage>=35 && percentage<40){
//         console.log("your percentage is:",percentage,"and you have secured third division")
//     }
//     else if(percentage<35){
//         console.log("Sorry! you are failed ");
//     }
// }


for(let std of student){
    console.log("Student name:",std.name)
    console.log("Student email:",std.email)
    console.log("Student marks obtained:",std.marksheet)
    const per=std.marksheet/5;
    if(per>=80){
        console.log("your percentage is:",per,"and you have secured distinction")
    }else if(per>=60){
        console.log("your percentage is:",per,"and you have secured first division")
    }else if(per>=45){
        console.log("your percentage is:",per,"and you have secured second division")
    }else if(per>=30){
        console.log("your percentage is:",per,"and you have secured third division")
    }else{
        console.log("Sorry! you are failed ");
    }
}
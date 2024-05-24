// functional class
// class based

// 4 pillars
//  abstract
// encapsulation
// inheritance
// polymorphism

// function User(){   //constructor function
//     // class data
//     this.name=" ram thapa"
//     this.address="Kathmandu"
// }


// const userObj=new User()  //constructor call
// console.log(userObj)
// console.log(userObj.name)
// userObj.name="rt"
// userObj.address="lalitpur"
// console.log(userObj)

// // assigning function to a class
// User.prototype.setEmail = function(_email){
//     this.email=_email
// }

// create a functional class called Student,
// obtain and assign marks and name to the student class 
// using prototype create two functions to add percentage and division
// print the values

function Student(_obtained,_name){
    this.marks=_obtained
    this.name=_name
    this.percentage()
}

Student.prototype.percentage= function(){
    this.percentage=this.marks/500*100    
    this.division()
    
}

Student.prototype.division=function(){
    if(this.per>=80){
        this.division="distinction"
    }
    else if(this.per>=60){
        this.division="first division"
    }else if(this.per>=45){
        this.division="second division"
    }else if(this.per>=35){
        this.division=" third division"
    }else if(this.per<35){
        this.division=" failed"
    }
}

const student=new Student(430,"ram")

student.division()
console.log(student)



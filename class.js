class Admin{
    name;
    address;
    email;
    static role="admin"  //like using const for declaring the variable

//optional in javascript    
    // set email(){
    //     return this.email
    // }
    // get email(){
    //     return this.email
    // }

// Ways to defining the function in a class
    setName(_name){
        this.name=_name
    }

    getName= function(){
        return this.name;
    }

    setAddress = (_address)=>{
        this.address=_address;
    }
}

const admin= new Admin()
admin.setName("ram")
admin.setAddress("kathmandu")
admin.email="r@gmail.com"
console.log(admin)


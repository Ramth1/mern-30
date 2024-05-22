class Admin{
    name; 
    address;
    #email;
    static role="admin"

    constructor(_name,_address,_email){
        console.log("I am always called")
        this.name=_name
        this.address=_address
        this.#email=_email
    }

    get email(){
        return this.#email
    }
}

const admin= new Admin("ram","kathmandu","r@gmail.com")
console.log(admin.email)
console.log(admin)


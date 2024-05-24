class Database{
    connection;

    constructor(){
        this.connection ="connection"
        console.log("i am in databse class")
    }
    getConnection = ()=>{
        return this.connection;
    }
}

class User extends Database{
    constructor(){
        //this.connection()
        super()// this will call parent constructor
        console.log("i am in user class")
        this.connection;
    }
    getConnection() {
        return super.getConnection()
    }
}

const userObj=new User()
console.log(userObj.getConnection())//connected





// calculate division of a student using promise functions
// create 2 different functions, a. to get the percentage (promise based) b. to get the division based on promise 
// make a program to print the division and percentage of the student

const percentage = async (ob, total) => {
    try {
        if (total <= 0) {
            throw "total should be greater than 0";
        }
        const per = (ob / total) * 100;
        return per;
    } catch (exception) {
        throw exception;
    }
}

const division = async (per) => {
    return new Promise((res, rej) => {
        if (per >= 80) {
            res("distinction");
        } else if (per >= 60) {
            res("first division");
        } else if (per >= 45) {
            res("second division");
        } else if (per >= 35) {
            res("third division");
        } else if (per < 35 && per >= 0) {
            res("sorry! you are failed");
        } else {
            rej("percentage cannot be in negative value.");
        }
    });
}

// let result = percentage(440, 500);

// result
//     .then((res) => {
//         console.log(`Percentage: ${res}`);
//         return division(res);
//     })
//     .then((res) => {
//         console.log(`Division: ${res}`);
//     })
//     .catch((rej) => {
//         console.log(`Error: ${rej}`);
//     });

const getCalculation = async () =>{
    try{
        const per=await percentage(440,500)
        const div =await division(per)
        console.log("percentage",per, "%")
        console.log("division:", div)
    }
    catch(exception){
        console.log(exception)
    }
}
getCalculation()
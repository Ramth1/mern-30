// if-else
// else-if
// switch-case
// lop

// expression =>true, not null,non-empty, not undefined, non-zero numeric variable 

const name=""

if(name){
    // body
    // if expression is true
    console.log("your name is ",name)
}
else{
    // if not true
    // is optional
    console.log("name is empty")
}

// create a javascript code block to calculate percentage and division based on percentage, 
// you have a variable storing marks obtained. 
// the value should be less than 500 and greater than or equal to 0
// calculate percentage if total score is 500'
// calculate division based on percentage.
// for division consider.
// percentage=>80  =>first division with distinction
// percentage=>60  <80=>First Division
// percentage=>45 <60 =>second Division
// percentage=>35  <45=>third Division
// percentage=>25  <35=>sorry! you are failed 

let marks=200
let percentage=marks/500*100

if(percentage >=80){
    console.log("first division with distinction")
}
else if(percentage >=60 && percentage<80){
    console.log("first division")
}
else if(percentage >=45 && percentage<60){
    console.log("second division")
}
else if (percentage >=35 && percentage<45){
    console.log("third division")
}
else if(percentage >=25 && percentage<35){
    console.log("sorry! you are failed")
}

// calculate utility bill for electricity 
// assume a household continues 350 units of electricity in a month.
//calculate total bill to be paid.
// consider the following.
// total units consume is less than 20, a lumsum amount of Npr.80 has to be paid
//for next 20 units, the is Npr is 5/unit.
//for next 30 units, the is Npr is 7.5/unit.
//for next 50 units, the is Npr is 10/unit.
//for next 100 units, the is Npr is 15/unit.
//and above all, the rate is Npr is 20/unit.


// let unit=350
// let billamount=0
// if(unit <=20){
//     billamount=80
// }
// else if(unit<=40){
//     billamount =80+(unit-20)*5
// }
// else if(unit<=70){
//     billamount=80+20*5+(unit-(20+20))*7.5
// }
// else if(unit <=120){
//     billamount=80+20*5+30*7.5+(unit-(20+20+30))*10
// }
// else if(unit<=220 ){
//     billamount=80+20*5+30*7.5+50*10+(unit-(20+20+30+50))*15
// }
// else{
//     billamount=80+20*5+30*7.5+50*10+100*15+(unit-(20+20+30+50+100))*20
// }
// console.log(billamount)



// // calculate tax to be paid monthly and yearly with net income
// // consider a software developer earns yearly Npr.500000
// // the tax bracket for is as follows.
// // for the first Npr.500000,1%
// // for the next NPR.200000,15%
// // for the next NPR.300000,20%
// // for the next NPR.1000000,25%
// // for the next NPR.2000000,30%
// // calculate , net salary yearly, net salary monthly, tax to be paid yearly , tax to be paid monthly

// let yearlyIncome = 500000;
// let netYearlySalary = 0;
// let netMonthlySalary = 0;
// let taxYearly = 0;
// let taxMonthly = 0;

// if (yearlyIncome <= 500000) {
//     taxYearly = yearlyIncome * 0.01;
// } else if (yearlyIncome <= 700000) {
//     taxYearly = 500000 * 0.01 + (yearlyIncome - 500000) * 0.15;
// } else if (yearlyIncome <= 1000000) {
//     taxYearly = 500000 * 0.01 + 200000 * 0.15 + (yearlyIncome - 700000) * 0.20;
// } else if (yearlyIncome <= 2000000) {
//     taxYearly = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.20 + (yearlyIncome - 1000000) * 0.25;
// } else {
//     taxYearly = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.20 + 1000000 * 0.25 + (yearlyIncome - 2000000) * 0.30;
// }

// netYearlySalary = yearlyIncome - taxYearly;
// netMonthlySalary = netYearlySalary / 12;
// taxMonthly = taxYearly / 12;

// console.log("Net Salary Yearly:", netYearlySalary);
// console.log("Net Salary Monthly:", netMonthlySalary);
// console.log("Tax to be Paid Yearly:", taxYearly);
// console.log("Tax to be Paid Monthly:", taxMonthly);

let yearlyIncome=500000
let netYearlyIncome=0
if(yearlyIncome<=500000){
    netYearlyIncome=500000-500000*0.01
}
else if(yearlyIncome<=700000){
    netYearlyIncome=500000-500000*0.01+200000-(700000-200000)*0.1
}
else if(yearlyIncome<=1000000){
    netYearlyIncome=500000-500000*0.01+200000-(700000-200000)*.1+300000-(1000000-300000)*.15
}
else if(yearlyIncome<=2000000){
    netYearlyIncome=500000-500000*.01+200000-(700000-200000)*.1+300000-(1000000-300000)*.2+1000000-(2000000-1000000)*.2
}
else{
    netYearlyIncome=500000-500000*.01+200000-(700000-200000)*.1+300000-(1000000-300000)*.2+1000000-(2000000-1000000)*.2+2000000-(4000000-2000000)*.3
}

console.log(netYearlyIncome)




// switch()
// create a day variable storing name of any day from sunday to saturday
// print, if day is saturday or sunday==>Holiday
// print, if day is friday ==>weekend
// print, if day is any other day==> weekday

// let day="sunday"

// switch(day){
//     case 'sunday':
//     case 'saturday':
//         console.log("holiday")
//         break;
    
//     case 'friday':
//         console.log("weekend")
//         break;
    
//     default:
//         console.log("weekday")
// }
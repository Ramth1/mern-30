// let unit=350
// let total_bill

// if(unit<20){
//     total_bill+=80
// }
// else if(unit<=40){
//     total_bill=80+20*5
// }
// else if(unit<70){
//     total_bill=80+20*5+30*7.5
// }
// else if(unit<=120){
//     total_bill=80+20*5+30*7.5+50*10
// }
// else if(unit<=220){
//     total_bill=80+20*5+30*7.5+50*10+100*15
// }
// else{
//     total_bill=80+20*5+30*7.5+50*10+100*15+(350-20-20-30-50-100)*20
// }

// console.log(total_bill)

// calculate tax to be paid monthly and yearly with net income 
// consider a software developer earns yearly npr. 5000000
// the tax bracket for is as follow
// for the first npr.500000 ,1%
// for the next npr. 200000, 15%
// for the next npr. 300000, 20%
// for the next npr. 1000000, 25%
// for the next npr. 2000000, 30%
// and for any surplus amount, 36%

// calculate a. net salary yearly, b. net salary monthly c. tax to be paid yearly, d. tax to be paid monthly
// a. yearly net =>3695000
// b. monthly net =>307916.67
// c. yearly tax=> 1305000
// d. monthly =>108750



let yearlySalary=5000000
let netSalary=0
let netTax=0
if(yearlySalary<500000){
    netTax=500000*1/100
    netSalary=5000000-netTax
}
else if(yearlySalary<200000){
    netTax=500000*1/100+200000*15/100
    netSalary=5000000-netTax
}
else if(yearlySalary<300000){
    netTax=500000*1/100+200000*15/100+300000*20/100
    netSalary=5000000-netTax
}
else if(yearlySalary<1000000){
    netTax=500000*1/100+200000*15/100+300000*20/100+1000000*25/100
    netSalary=5000000-netTax
}
else if(yearlySalary<2000000){
    netTax=500000*1/100+200000*15/100+300000*20/100+1000000*25/100+2000000*30/100
    netSalary=5000000-netTax
}
else{
    netTax=500000*1/100+200000*15/100+300000*20/100+1000000*25/100+2000000*30/100+(yearlySalary-2000000-1000000-300000-200000-500000)*36/100
    netSalary=5000000-netTax
}
console.log(netSalary)
console.log("monthly salary:",netSalary/12)
console.log("net tax:",netTax)
console.log("monthly tax:",netTax/12)









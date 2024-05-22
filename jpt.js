let unit=350
let total_bill

if(unit<20){
    total_bill+=80
}
else if(unit<=40){
    total_bill=80+20*5
}
else if(unit<70){
    total_bill=80+20*5+30*7.5
}
else if(unit<=120){
    total_bill=80+20*5+30*7.5+50*10
}
else if(unit<=220){
    total_bill=80+20*5+30*7.5+50*10+100*15
}
else{
    total_bill=80+20*5+30*7.5+50*10+100*15+(350-20-20-30-50-100)*20
}

console.log(total_bill)
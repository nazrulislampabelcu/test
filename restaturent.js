const age = 60;
const price = 500;
if(age < 18){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age >= 60){
const discount = price * 30 / 100;
const payAmount = price - discount;
console.log(payAmount);
}
else{
    console.log("Pay Full Price")
}
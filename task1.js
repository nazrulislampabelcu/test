var height = document.getElementById();
var weight = 70;
var bmi = weight/(height*height)
if(bmi < 18.5){
    console.log("you are underweight. and your BMI is", bmi.toFixed(2))
}else if(bmi >= 18.5 && bmi <=24.9){
    console.log("you are normal",bmi.toFixed(2))
}else if(bmi >= 18.5 && bmi <=29.9) {
console.log("you are overweight.",bmi.toFixed(2))
}else{
    console.log("you are obese", bmi.toFixed(2))
}
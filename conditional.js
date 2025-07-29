/**
 * COMPARISON
 * 1. bigger: >
 * 2. less: <
 * 3. equal: ==
 * 4. greater than or equal >=
 * 5. less than or equal : <=
 * 6. not  equal: !=
 * 
 * -----------------
 * 7. and : &&
 * 8. or:||
 * 
 */
//console.log (5 > 10);
//console.log (5 < 10);
//console.log (5 == 10);
//console.log (15 >= 10);
//console.log (15 <= 10);

//var peyaraPrice = 30;
//var apple = 20;
//console.log(peyaraPrice < apple)
/**
 * ==
 * ===
 */
//console.log(10 == '10')
//console.log(10 === '10')
//console.log( 10 !== '10');
/**
 * if you buy food for me i will come
 * 
 *
 * -----
 * if biryani price less than 300 taka i will buy
 *-----Structure
 if(condition ){
 statement
 }
 */
// if( 3 < 19){
//     console.log("smaller value")
// }else{
//     console.log("no")
// }
// var biryaniPrice = 300;

// if(BigUint64Array < 300){
//     console.log("Give me Biryani")
// }else{
//     console.log("parbo na")
// }

/**
 *
 *  
 */
// var weight = 40;
// if(weight <= 40){
//     console.log("I will carry")
// }else{
//     console.log("I will call rent a rikshaw")
// }
const salary = 9999;
const isBCS = true;
const height = 61;
// if(salary > 25000 && height > 66){
//     console.log('Supatro')
// }else{
//     console.log('onno patro dekho')
// }

// if(salary > 25000 || height > 66){
//     console.log('Supatro')
// }else{
//     console.log('onno patro dekho')
// }

// if(salary > 25000 && height > 66 && isBCS == true){
//     console.log('Supatro')
// }else{
//     console.log('onno patro dekho')
// } 

// ----------Complex Condition-----------

// if((salary > 25000 || height > 66) || isBCS == true){
//     console.log('Supatro')
// }else{
//     console.log('onno patro dekho')
// }

/**
 * Multi Level Condition
 */
const price = 3000;
if(price >= 5000){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price >= 2500){
const discount = price * 5 / 100;
const payAmount = price - discount;
console.log(payAmount);
}
else{
    console.log(price);
}
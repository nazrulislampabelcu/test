/**
 * Ternary --> Three Parts
 * ? :
 * condition ? do something when true : do something when false
*/
const age = 18;
//age >= 20 ? console.log('Vote Daw'): console.log('gumai jaw');
let price = 4500;
const isLeader = true;
if(isLeader === true){
price = 0;
}else{
    price = price + 100;
}
//console.log(price);
price = isLeader === true ? 0 : price + 100;


```
# Semana 2
```

# Javascript 
## Multiply 
function multiply(a, b){
  return a * b;
}

## ASCII Total
function uniTotal (string) {
  let t = 0;
  let caracteres = string.length;
  for (let i = 0; i<caracteres; i++ ){
    t += string[i].charCodeAt();
  }
    
  return t;
}

## get character from ASCII Value
function getChar(c){
  // funcion  que permite tomar un numero y convertirlo en
  //en un valor ASCII
  
  return String.fromCharCode(c);
  
}

## Binary Addition 
function addBinary(a,b) {
  let suma = a + b; 
  return (suma).toString(2);

}

## Student's Final Grade
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10)  
    return 100;
  if (exam > 75 && projects >= 5)
    return 90;
  if (exam >50 && projects >=2)
    return 75;
  return 0;
}

## Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
//Botellas libres de impuestos 
//Cubrir costo de Vacaciones 
//Precio de Botella despues de descuento 

let totalDiscount = (normPrice * discount)/100;
let totalHoliday  = hol / totalDiscount;
  
let total = Math.floor(totalHoliday);
  
return total;
  
}

## Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
    
  let age1 = (sonYearsOld * 2);
  let age2 = (dadYearsOld - age1);
  
  return Math.abs(age2);
}

## Valid Spacing
function validSpacing(s) {
  if(s.charAt(0) === ' ' || s.charAt(s.length - 1) === ' '){
    return false;
  }
for(let i=0; i < s.length; i++ ){
 if( s.charAt(i) === ' '){
  if(i !=0 && s.charAt(i-1) === ' '){
    return false;
  }
   //Si es mentira 
   if(i !=(s.length - 1) && s.charAt() === ' '){
    return false;
     }
 }
}
  return true;
}
## Fake Binary
function fakeBin(x){
  let salida = '';
  for (let i = 0; i < x.length; i++){
    if (parseInt(x[i]) < 5){
     salida += '0';
   }
   else if (parseInt(x[i]) > 4){
     salida += '1';
   }
 }
  return salida;
}

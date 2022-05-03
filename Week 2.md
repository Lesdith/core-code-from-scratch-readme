
# Tuesday 🗓️
## Kata Multiply 
### Description 
#### This code does not execute properly. Try to figure out why.
```
function multiply(a, b){
  return a * b;
}
```

## Kata ASCII Total
### Description
#### You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
```
function uniTotal (string) {
  let t = 0;
  let caracteres = string.length;
  for (let i = 0; i<caracteres; i++ ){
    t += string[i].charCodeAt();
  }
    
  return t;
}
```

## Kata Char From ASCII Value
### Description
#### Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

```
function getChar(c){
  // funcion  que permite tomar un numero y convertirlo en
  //en un valor ASCII
  
  return String.fromCharCode(c);
  
}
```

## Binary Addition 
### Description 
#### Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string.Examples:(Input1, Input2 --> Output (explanation)))

```
function addBinary(a,b) {
  let suma = a + b; 
  return (suma).toString(2);

}
```

## Kata Student's Final Grade
### Description 
#### Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

```
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10)  
    return 100;
  if (exam > 75 && projects >= 5)
    return 90;
  if (exam >50 && projects >=2)
    return 75;
  return 0;
}
```
# Wednesday 🗓️
## Kata Holiday VIII - Duty Free

```
function dutyFree(normPrice, discount, hol){
//Botellas libres de impuestos 
//Cubrir costo de Vacaciones 
//Precio de Botella despues de descuento 

let totalDiscount = (normPrice * discount)/100;
let totalHoliday  = hol / totalDiscount;
  
let total = Math.floor(totalHoliday);
  
return total;
  
}

```

## Kata Twice as old

```
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
    
  let age1 = (sonYearsOld * 2);
  let age2 = (dadYearsOld - age1);
  
  return Math.abs(age2);
}
```

## Kata Valid Spacing

```
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
```

## Kata Fake Binary

```
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
```

# Thursday 🗓️
## Kata Remove All Exclamation Marks From The End Of Sentence

```
function remove (string) {  
  let result = string; 
  
  while (result[result.length -1] == "!"){
    //Remove !
    result = result.slice(0, -1);
  }
  return result;
}
```
## Kata Vowel Remover 

```
function shortcut (string) {
  
  // el / +/g  nos sirve para reemplazar en este caso 
  //las vocales por un espacio en blanco
  return string.replace(/[aeiou]+/g,"");
}
```
## Kata Rock Paper Scissors

```
function rps (p1, p2){
  if (p1 === p2){
    return "Draw!";
  }
  const ruls = {
    rock    : 'scissors',
    paper   : 'rock',
    scissors: 'paper'
  };
  if (ruls [p1]===p2){
    return "Player 1 won!";
  }else {
    return "Player 2 won!";
  }
}
```

## Kata Persistent Bugger 
```
function persistence(num) {
   //code me
  let n = num;
  let count = 0;
  while(n> 9){
    count ++;
    n = [ ...String(n)].map(Number).reduce((a,v)=>a*v,1)
  }
  return count
}
```


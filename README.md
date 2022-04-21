# core-code-from-scratch-readme
# I'm Lesvia, Systems Engineer. Currently I have only developed University Projects, I would like to be able to specialize and expand my knowledge as a software developer that helps solve problems in multinational companies. I am a self-taught and committed person who likes challenges.

Compiled languages are automatically prepared to run, a bit flexible and require compilation, while interpreted languages are cross-platform, easy to test, bugs are much easier to catch, an interpreter is required, their source code is publicly accessible and they are often slow.

# Is Java compiled or interpreted, or both?
java is compiled and interpreted


# Pseudocodigo
```
1.start process
2.Define btc, usd, change as integers;
3.Define btc = 0.000022;
  4.Write “Enter the amount of dollars you want to convert:”;
  5.read usd;
  6.change <- (usd * btc);
  7.Write “The change to today is:”, change;
8.end process
'''
```
# Your date of birth in the matrix?
```
** My date of birth is 12/23/2023 **

**1100/10111/11111000111**

It is solved by dividing the value by two, decimal values are not taken, only integer values, in the event that we get a decimal value, it means that we have 1 left over.

- 23 / 2 = 11 -> 11*2 = 22 residue 1 because 23-22=1
- 11 / 2 = 5 residue 1
- 05 / 2 = 2 residue 1 
- 02 / 2 = 1 residue 0
- 01 / 2 = 0 residue 1

-- we order them from bottom to top
--- Result:  10111

- 12 / 2 = 6 residue 0
- 6 / 2 = 3 residue 0
- 3 / 2 = 1 residue 1
- 1 / 2 = 0 residue 1

-- we order them from bottom to top
--- Result:  1100

- 1991 / 2 = 995 residue 1
- 995 / 2 = 497 residue 1
- 497 / 2 = 248 residue 1
- 248 / 2 = 124 residue 0
- 124 / 2 = 62 residue 0
- 62 / 2 = 31 residue 0
- 31 / 2 = 15 residue 1
- 15 / 2 = 7 residue 1
- 07 / 2 = 3 residue 1
- 03 / 2 = 1 residue 1
- 01 / 2 = 0 residue 1

-- we order them from bottom to top
--- Result:  11111000111


 ```
 MIPS
 ```
 # Exercise 1
 
   .data
        title: .asciiz "\nSum of 2 numbers\n"
        result: .asciiz "\nResult:"
        number1: .asciiz "\nEnter a number: "
        number2: .asciiz "\nEnter a number: "
  .text
        main:
              # Title
              li $v0, 4
              la $a0, title
              syscall

              # Ask user to enter a number
              li $v0, 4
              la $a0, number1
              syscall

              li $v0, 5
              syscall

              # save user data
              move $t0, $v0

              # Ask user to enter a number
              li $v0, 4
              la $a0, number2
              syscall

              li $v0, 5
              syscall

              # save user data
              move $t1, $v0

              # adding up
              add $t2, $t0, $t1

              # show result
              li $v0, 4
              la $a0, result
              syscall

              # Print result
              li $v0, 1
              move $a0, $t2
              syscall
              
              
 # Exercise 2
   .data
	      name: .asciiz "\nMi Nombre es: Lesvia Judith Terraza\n"
  .text
	      main:
              li $v0, 4
              la $a0, name
              syscall
	    

 ```
 # Print Special Numbers
 ```
 # Using a for loop
 var i;
 for(i=0; i<=100; i+=2){
 	console.log(i);
 }
	
#using while loop
var i;
i=2;
while (i <=100){
   console.log(i);
   i+=2;
   }
   
 #using Do While 
 var i;
 i=0;
 do{
    i++2;
    }
 while(i<=100);

```
# Bad Code
```
#Exercice 1
# It had double parentheses in the if and only 1 is used
# in the if for the condition to be fulfilled it would be true if the value is identical to true

var cond = false;

if (cond == true) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}

#Exercice 2
var n = 100;
var multiple = n % 10;

if (n == 100) {
  console.log('This is a special number!');
}
else if (n < 1000 && multiple == 0) {
  console.log('This number is almost special');
}
else{
  console.log('Just a regular number');
}

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


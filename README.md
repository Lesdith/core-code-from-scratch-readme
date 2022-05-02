# core-code-from-scratch-readme
<h2> Hi, I'm Lesvia! <img src="https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif" width="50"></h2>
<img align='right' src="https://media.giphy.com/media/ieyl9zmCjO4b4t6qoY/giphy.gif" width="230">
<p><em>Software Enginner at <a href="https://www.umg.edu.gt/">University Mariano Galvez de Guatemala</a><img src="https://media.giphy.com/media/fYSnHlufseco8Fh93Z/giphy.gif" width="30"></br>
</em></p>

[![Twitter: Lesdiths](https://img.shields.io/twitter/follow/Lesdith?style=social)](https://twitter.com/lesdits)
[![Linkedin: Lesdith](https://img.shields.io/badge/-lesdith-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lesdith-terrasandoval/)](https://www.linkedin.com/in/lesdith-terrasandoval//)
[![GitHub Thaiane](https://img.shields.io/github/followers/lesdith?label=follow&style=social)](https://github.com/Lesdith)


### <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50"> A little more about me...  

```javascript
const thai = {
  pronouns: "she" | "her",
  code: [PHP, C#,Javascript, HTML],
  tools: [React, Redux, Node, Storybook, Styled-Components, Jest, Docker],
  techCommunities: {
                        coorganizer: "AfroPython",
                        speaker: "Latinity",
                        mentor: "EducaTRANSforma"
                      },
 challenge: "I am doing the #100DaysOfCode challenge focused on react and typescript"
}
```

<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :)</em>

---

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


```
# Semana 3
```
## Who Likes it?
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0:   return 'no one likes this'; break;
    case 1:   return names[0] + ' likes this'; break;
    case 2:   return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3:   return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default:  return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

## Your order, please
function order(words){
  return words.split(' ').sort(function(a,b){
    return a.match (/\d/) - b.match(/\d/);
  }).join(' ');
}


## Bit Counting 
var countBits = function(n) {
  // Program Me 
  let binario = (n.toString(2));
  let temporal = 0;
  for(let i = 0; i < binario.length; i++){
    if(binario[i] === '1') temporal++;
  }
  return temporal;
};

##Simple Pig latin 
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

## Counting Duplicates
function duplicateCount(text){
  //...
  let newText = text.toLowerCase();
  let object = {};
  let temporary = 0;
  for(let i = 0; i < newText.length; i++)
    if((!object[newText[i]])){
      object[newText[i]] = 1;
    }else if(object[newText[i]] < 2){
      object[newText[i]] += 1;
      temporary++;
    }
  return temporary;
}

## Decode the Morse code
decodeMorse = function(morseCode){
   function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}






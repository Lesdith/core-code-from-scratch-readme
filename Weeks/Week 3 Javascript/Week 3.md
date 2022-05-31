## BACK 
<a href="https://github.com/Lesdith/core-code-from-scratch-readme"> INICIO </a>

# Monday 🗓️
## Kata Who Likes it?

```javascript
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
```

## Kata Your order, please
```javascript
function order(words){
  return words.split(' ').sort(function(a,b){
    return a.match (/\d/) - b.match(/\d/);
  }).join(' ');
}
```

## Kata Bit Counting 
```javascript
var countBits = function(n) {
  // Program Me 
  let binario = (n.toString(2));
  let temporal = 0;
  for(let i = 0; i < binario.length; i++){
    if(binario[i] === '1') temporal++;
  }
  return temporal;
};
```

# Tuesday
## Kata Simple Pig latin 

```javascript
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
```

## Kata Counting Duplicates
```javascript
function duplicateCount(text){
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
```

## Kata Decode the Morse code
```javascript
decodeMorse = function(morseCode){
   function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
```

# wednesday 🗓️
## Kata Valid Parentheses

```javascript
function validParentheses(parens) {
  // your code here ..
  let parentheses = 0;
  for (let i = 0; i < parens.length && parentheses >= 0; i ++){
    parentheses += (parens[i] == '(') ? 1 : -1;
  }
  return (parentheses ==0);
}
```

## Kata Convert string to camel case
```javascript
function toCamelCase(str){
  var expresion = /[-_]\w/ig;
  
  return str.replace(expresion,function(match){
     return match.charAt(1).toUpperCase();
  });
  }
  ```
  ## Kata Unique in order
  
  ```javascript
  function uniqueInOrder(iterable){
  //your code here - remember iterable can be a string or an array
  let result = [];
  
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i + 1]){
      result.push(iterable[i])
    }
  }
  return result;
}
```
# Thursday 🗓️
## Kata Fold an array 

```javascript
function foldArray(a, n) {
  const r = [],
    c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}
```
## Kata Encrypt this

```javascript
var encryptThis = function(text) {
  let arr = text.split(' ');
  let encrypt = arr.map((str) => {
    if(str.length == 1) return `${str.charCodeAt()}`;
    if(str.length == 2) return `${str[0].charCodeAt()}${str[1]}`;
    let rest = str.slice(1);
    let restFirst = rest[0];
    let restLast = rest[rest.length-1];
    let restRest = rest.slice(1,rest.length-1);
    return `${str[0].charCodeAt()}${restLast}${restRest}${restFirst}`;
  });
  return encrypt.join(' ');
}
```

  








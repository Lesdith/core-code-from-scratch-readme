

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






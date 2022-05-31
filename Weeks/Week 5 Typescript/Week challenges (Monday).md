# BACK TO TOP

<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%205%20Typescript/Week%205.md"> WEEK 5 </a>

# Monday 🗓️
## Find The Missing Letter

### KATA #1
Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">find - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode">fromCharCode - MDN</a> </li> 
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt">CharCodeAt - MDN</a> </li> 
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```javascript
function findMissingLetter(array) {
  const missing = array
    .map((letter) => letter.charCodeAt())
    .find((code, i, charCodeArray) => {
      if (i === 0) return false;
      return code - 1 != charCodeArray[i - 1];
    });
  return String.fromCharCode(missing - 1);
}
```
### Mi Solution

```javascript
function findMissingLetter(array)
{
   var string = array.join("");
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}
```

## Reverse Or Rotate?

### KATA #2
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

<p>If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.</p>

If
<ul> 
  <li> sz is <= 0 or if str is empty return ""</li>
  <li> sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "". </li> </ul>
  
### Example:
***revrot("123456987654", 6) --> "234561876549"***

### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp">RegExp - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match">match - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map - MDN</a> </li> 
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow">Math.pow - MDN</a> </li> 
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">reduce - MDN</a> </li> 
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split">split - MDN</a> </li> 
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift">shift - MDN</a> </li> 
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse">reverse - MDN</a> </li> 
</ul> 

### More Help?

Slack us 😉

## Solutions
### CORE CODE 
```javascript
function revrot(str, sz) {
  if (sz <= 0 || sz >= str.length || str === '') return '';
  let regex = new RegExp(`\\d{${sz}}`, 'g');
  let chunks = str.match(regex);
  let sum = 0;
  let chunkArray = [];
  let result = chunks.map((chunk) => {
    sum = chunk
      .split('')
      .map((digit) => Math.pow(+digit, 3))
      .reduce((prev, curr) => prev + curr, 0);
    chunkArray = chunk.split('');
    if (sum % 2 === 0) return chunkArray.reverse().join('');
    return chunkArray.push(chunkArray.shift()), chunkArray.join('');
  });
  return result.join('');
}
```
### Mi Solution
```javascript
function revrot(str, sz) {
   ln = str.length;
   if(sz < 1 || !str || sz > ln) return "";

   const test = s => Array.prototype.reduce.call(s, (acc, val) => acc + Number(val) ** 3, 0) % 2 === 0;
   const reverse = s => s.split("").reverse().join("");
   const rotate = s => s.slice(1) + s.slice(0, 1);

   let arr = [];
   for(let i = 0; i < ln; i += sz) arr.push(i+sz <= ln ? str.slice(i, i+sz) : "")
   return arr.map(x => test(x) ? reverse(x) : rotate(x)).join("");
}
```

## CONTINUE WITH TUESDAY
 <a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%205%20Typescript/Week%20challenges%20(Tuesday).md">Week challenges (Tuesday) 💻</a> 

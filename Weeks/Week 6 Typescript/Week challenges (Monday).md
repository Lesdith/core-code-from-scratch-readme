# Monday 🗓️
## Find The Missing Letter

### KATA 
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

### How to submit my solution?
Add your solution to your README file

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

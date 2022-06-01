# BACK
<ul>
<li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%204%20End%20of%20month%20%26%20pause%20day/Week%204.md"> WEEK 4  </a> </li>
  <li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%204%20End%20of%20month%20&%20pause%20day/Week%20challenges%20(Thursday).md"> Week challenges (Thursday) 💻 </a> </li>
</ul>


# WEDNESDAY 🗓️
## Simple Validation Of A Username

### KATA #1
Simple Validation Of A Username

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).


### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test">test - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">Character Classes - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"> Groups And Ranges - MDN</a>  </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers">Quantifiers - MDNN</a> </li>
  <li><a href="https://regexr.com/">Regexr Tool</a></li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
function validateUsr(username) {
  /**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */
  const validator = /^[a-z0-9_]{4,16}$/;

  return validator.test(username);
}
```

### My Solution

```typescript
function validateUsr(username) {
  const rules = /^[a-z0-9_]{4,16}$/;
  return rules.test(username); 
}
```

### KATA #2
Get Number From String


Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:
```
getNumberFromString(s)
```


### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"> Character Classes - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"> replace - MDN</a> </li> 
    <li><a href="https://regexr.com/"> Regexr Tool</a> </li> 
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
function getNumberFromString(s) {
  return +s.replace(/\D/g, '');
}
```

### My Solution
```typescript
function getNumberFromString(s) {
  return Number(s
  .match(/\d/g)
  .join(''));
} 
```
# NEXT
<ul>  
 <li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%204%20End%20of%20month%20&%20pause%20day/Week%20challenges%20(Thursday).md"> Week challenges (Thursday) 💻 </a> </li>
</ul>

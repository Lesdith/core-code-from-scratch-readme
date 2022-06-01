# BACK
<ul>
<li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%204%20End%20of%20month%20%26%20pause%20day/Week%204.md"> WEEK 4  </a> </li>
  <li><a href=" https://github.com/Lesdith/core-code-from-scratch-readme/edit/main/Weeks/Week%204%20End%20of%20month%20&%20pause%20day/Week%20challenges%20(Wednesday).md"> Week challenges (Wednesday) 💻 </a> </li>
</ul>


# THURSDAY 🗓️
## String Cleaning

### KATA #1
String Cleaning

Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)

```
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
```

Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">Character Classes - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace">replace - MDN</a>  </li>
  <li><a href="https://regexr.com/">Regexr Tool</a></li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
function stringClean(s) {
  return s.replace(/\d/g, '');
}
```

### My Solution

```typescript
function stringClean(s){
  return s.replace(/[0-9]/g,''); 
}
```

### KATA #2
Password Validation


You need to write regex that will validate a password to make sure it meets the following criteria:
```
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
```

Valid passwords will only be alphanumeric characters.


### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test"> test - MDN </a> </li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"> Character Classes - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"> Groups And Ranges - MDN</a> </li> 
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"Quantifiers - MDN</a> </li> 
    <li><a href="https://regexr.com/">Regexr Tool</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}
```

### My Solution
```typescript
function validate(password) {
  const rules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;
  return rules.test(password);
}
```



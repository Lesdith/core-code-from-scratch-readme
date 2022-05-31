# BACK TO TOP

<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%205%20Typescript/Week%205.md"> WEEK 5 </a>

# WEDNESDAY 🗓️
## Duplicate Encoder

### KATA #1
Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((
```
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


### Helpful Resources 📖
<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"> forEach - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"> filter - MDN</a> </li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"> toLowerCase - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
export function duplicateEncode(word: string) {
  return word
    .toLowerCase()
    .split('')
    .map((a: string, i: number, w: string[]) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
```
### Mi Solution

```typescript
export function duplicateEncode(word: string){
   return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
```

## Find The Odd Int
### KATA #2
Find The Odd Int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
```
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
```

### Helpful Resources 📖

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"> filter - MDN</a> </li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"> set - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"> find - MDN</a> </li>
</ul>

### More Help?

Slack us 😉

## Solutions
### CORE CODE 
```typescript
export function findOdd(xs: number[]): number {
  return (
    xs.find(
      (x: number, i: number, a: number[]) =>
        a.filter((y: number) => y === x).length % 2 === 1
    ) || -1
  );
}
```

### Mi Solution
```typesscript
export const findOdd = (xs: number[]): number => {
   return xs.reduce((a,c)=>a ^ c, 0);
};
```

## Which Are In?

### KATA #3
Which Are In?
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
```
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
```

Example 2:
```
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

```
Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.









### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">Map - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
export function validBraces(braces: string): boolean {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
  }
  return braces.length === 0;
}
```
### Mi Solution

```typescript
export function validBraces(braces: string): boolean 
{
  while (/\(\)|\[\]|\{\}/g.test(braces))
  {
    braces = braces.replace(/\(\)|\[\]|\{\}/g,"")
  }
 return !braces.length;
}
```


## Tic-Tac-Toe

### KATA #4
Tic-Tac-Toe

Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.

The board is represented as an array with the following indexes:

```
0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8 

```
For example, the following board would be represented as

```
solveTTT(['', '', '', 'O', '', '', 'X', '', ''])
```
```
   |   |  
---+---+---
 O |   |  
---+---+---
 X |   |   
```
Valid outputs for the above input would be 0, 1, 2, 4, 5, 7 or 8.

The following board would only have 1 correct output (2) because it is the only move that connects 3 X's in a row:

```
solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])

```


### Helpful Resources 📖
<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map - MDN</a> </li>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"> forEach - MDN</a>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">Map - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```javascript
function solveTTT(b) {
  var xwin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (var i in xwin)
    if (xwin[i].map((x) => b[x]).join('') == 'XX')
      return xwin[i].reduce((x, y) => (b[y] == '' ? x + y : x), 0);
  for (var i in b) if (b[i] == '') return +i;
}
```
### Mi Solution

```javascript
function solveTTT(b) {
  var xwin=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
  for (var i in xwin) if (xwin[i].map(x=>b[x]).join("")=="XX") return xwin[i].reduce((x,y)=>b[y]=="" ? x+y : x,0);
  for (var i in b) if (b[i]=="") return +i;
}
```

## Tic-Tac-Toe-Like Table Generator
### Kata #5
Tic-Tac-Toe-Like Table Generator

Do you have in mind the good old TicTacToe?

Assuming that you get all the data in one array, you put a space around each value, | as a columns separator and multiple - as rows separator, with something like ["O", "X", " ", " ", "X", " ", "X", "O", " "] you should be returning this structure (inclusive of new lines):

```
 O | X |   
-----------
   | X |   
-----------
 X | O |   

```
Now, to spice up things a bit, we are going to expand our board well beyond a trivial 3 x 3 square and we will accept rectangles of big sizes, still all as a long linear array.

For example, for "O", "X", " ", " ", "X", " ", "X", "O", " ", "O"] (same as above, just one extra "O") and knowing that the length of each row is 5, you will be returning

```
 O | X |   |   | X 
-------------------
   | X | O |   | O 
```
And worry not about missing elements, as the array/list/vector length is always going to be a multiple of the width.


### Helpful Resources 📖
<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map - MDN</a> </li>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"> replace - MDN</a>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"> slice - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 

```javascript
const pad = (str, char) => char + str + char;
const row = (arr) => arr.map((x) => pad(x, ' ')).join('|');
const line = (w) => pad([...Array(w)].fill('---').join('-'), '\n');
const reshape = (arr, w, res = []) =>
  arr.length > 0
    ? reshape(arr.slice(w), w, res.concat([arr.slice(0, w)]))
    : res;
const displayBoard = (board, width) =>
  reshape(board, width).map(row).join(line(width));
```

### Mi Solution

```javascript
function displayBoard(board, width){
  let result = "";
  for (let i = 0; i < board.length; i++) {
    if (i > 0 && i % width === 0) {
      result += "---".repeat(width) + "-".repeat(width - 1) + "\n";
    }

    result += " " + board[i] + " ";

    if (i + 1 < board.length) {
      if ((i + 1) % width === 0) result += "\n";
      else result += "|";
    }
  }
  return result;
}
```

## NEXT
 <a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%206%20Typescript/Week%20challenges%20(Wednesday)%20.md">Week challenges (Wednesday) 💻</a> 



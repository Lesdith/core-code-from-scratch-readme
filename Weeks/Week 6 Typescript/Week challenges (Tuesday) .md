# BACK TO TOP

<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%205%20Typescript/Week%205.md"> WEEK 5 </a>

# TUESDAY 🗓️
## A Rule Of Divisibility By 13

### KATA #1
A Rule Of Divisibility By 13

From Wikipedia:

"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

```
10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)
```
For "mod" you can see: https://en.wikipedia.org/wiki/Modulo_operation)

Then the whole pattern repeats. Hence the following method:

Multiply

the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.

### Helpful Resources 📖
<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split">split - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse">reverse - MDN</a> </li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">reduce - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow">map.pow - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
export function thirt(n: number): number {
  let remainders: number[] = [1, 10, 9, 12, 3, 4];
  let result = n.toString().split('').reverse().map( (c,i) => parseInt(c)*remainders[i%6]).reduce( (p,c) => p += c);
  return n == result ? result : thirt(result)
}
```
### Mi Solution

```typescript
export function squareSum(numbers: number[]): number {
 
 return numbers.map(a=>Math.pow(a,2)).reduce((a,b)=>a+b,0);
}
```

## Playing With Digits
### KATA #2

Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.


```
dig_pow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
dig_pow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
```


### Helpful Resources 📖

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split">split - MDN</a> </li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">reduce - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map - MDN</a> </li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number - MDN</a> </li>
</ul>

### More Help?

Slack us 😉

## Solutions
### CORE CODE 
```typescript
export class G964 {
  public static digPow = (n: number, p: number) => {
    const x = n
      .toString()
      .split('')
      .reduce(
        (s: number, d: string, i: number) => s + Math.pow(Number(d), p + i),
        0
      );
    return x % n ? -1 : x / n;
  };
}
```
### Mi Solution
```typesscript
export class G964 {
  public static digPow = (n: number, p: number) =>  
  (n=(String(n)
      .split('')
      .reduce((sum: number , d: string) => 
              sum + (+d) ** p++, 0) / n), n%1 ? -1:n);
}
```

## Valid Braces

### KATA #3
Valid Braces

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
```
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
```
The parameter of accum is a string which includes only letters from a..z and A..Z

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
```typescript
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

```typescript
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
```typescript
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

```typescript
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



# BACK

<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%206%20Typescript/Week%206.md"> WEEK 6 </a>

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
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter - MDN</a> </li>  
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">find - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">sort - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    return a1
      .filter((a: string) => a2.some((b: string) => b.includes(a)))
      .sort();
  }
}
```
### Mi Solution

```typescript
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    return a1.filter(x => a2.join().indexOf(x) > -1).sort();
}
}
```


## Sums Of Parts

### KATA #4
Sums Of Parts

Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

```
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

```
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

Other Examples:

```
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
```
Notes
Take a look at performance: some lists have thousands of elements.
Please ask before translating.

### Helpful Resources 📖
<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">reduce - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
export function partsSums(ls: number[]): number[] {
  let total = ls.reduce((acc, cur) => acc + cur, 0);
  return [...[total], ...ls.map((num) => (total -= num))];
}
```
### Mi Solution

```typescript
export function partsSums(ls: number[]): number[] {
  let result = [0],
      l = 0,
      i = ls.length;
      
  while (i--) result.push(l += ls[i]);
  return result.reverse();
}
```

## Consecutive Strings
### Kata #5
Consecutive Strings

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:

```
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
```

n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

Note
consecutive strings : follow one after another without an interruption


### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"> slice - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 

```typescript
export function longestConsec(strarr: string[], k: number): string {
  let max = '';
  const n = strarr.length;
  for (let i = 0; i <= n - k && k > 0 && k <= n; i++) {
    const newStr = strarr.slice(i, i + k).join('');
    max = max.length >= newStr.length ? max : newStr;
  }
  return max;
}
```

### Mi Solution

```typescript
export function longestConsec(strarr: string[], k: number): string {
 if (k > strarr.length || k < 1) return '';
  return strarr.reduce(function(prevLongest, c, i, a) {
    var str = a.slice(i, i + k).join('');
    return str.length > prevLongest.length ? str : prevLongest;
  }, '');
}
```

## NEXT
 <a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%206%20Typescript/Week%20challenges%20(Thursday).md">Week challenges (Thursday) 💻</a> 



# BACK 
<ul>
<li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Week%207.md"> WEEK 7 </a> </li>
<li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Week%20challenges%20(Tuesday).md"> Week challenges (Tuesday) 💻</a> </li>
</ul>


# Wednesday 🗓️
## Build Tower

### KATA #1
Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
```
[
  "  *  ",
  " *** ", 
  "*****"
]
```
And a tower with 6 floors looks like this:
```
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
```

### Helpful Resources 📖
<ul>
  <li><a href="https://duckduckgo.com/?q=1+3+5+7+9+sequence&ia=web">1 3 5 7 9... sequence</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat">repeat - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
export const towerBuilder = (nFloors: number): string[] => {
  return Array.from({ length: nFloors }, (_, index) => {
    const spaces = ' '.repeat(nFloors - 1 - index);
    return `${spaces}${'*'.repeat(index * 2 + 1)}${spaces}`;
  });
};
}
```
### Mi Solution

```typescript
export const towerBuilder = (nFloors: number): string[] => {
  let array = [];
  for (let i = nFloors; i >= 1; i--) {
    let space = (nFloors - i);
    let stars = i * 2 - 1;
    array.push(" ".repeat(space) + "*".repeat(stars) + " ".repeat(space));
  }
  return array.reverse();
}
```
## Meeting

### KATA #2
Build Tower

John has invited some friends. His list is:

```
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
```
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:
```
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
```
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".


### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split">Split - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">Sort - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Map - MDN</a> </li>
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
export function meeting(s: string): string {
  return s
    .toUpperCase()
    .split(';')
    .map((n: string) => '(' + n.split(':').reverse().join(', ') + ')')
    .sort()
    .join('');
}
```
### Mi Solution

```typescript
export function meeting(s: string): string {
   return s
    .split(';')
    .map((el) => '(' + el.split(':').reverse().join(', ').toUpperCase() + ')')
    .sort()
    .join('');
}
```

### Thursday 🗓️   
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Week%20challenges%20(Thursday).md"> Week challenges (Thursday) 💻</a>

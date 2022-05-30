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


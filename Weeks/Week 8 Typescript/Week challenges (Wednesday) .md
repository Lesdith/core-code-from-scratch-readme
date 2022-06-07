# BACK 
<ul>
<li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%208%20Typescript/Week%208.md"> WEEK 8 </a> </li>
</ul>

# Wednesday 🗓️

## READ 📖
<ul>
  <li><a href="https://docs.microsoft.com/en-us/learn/modules/typescript-generics/"Define generics in TypeScript </a> guided exercise, using Typescript</li>
</ul>

### KATA #1
Make the Deadfish Swim

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

<ul>
  <li>i increments the value (initially 0)</li>
  <li>d decrements the value </li>
  <li> s squares the value </li>
  <li> o outputs the value into the return array </li>
</ul>
Invalid characters should be ignored.

```
parse("iiisdoso") => [8, 64]
```

### Helpful Resources 📖
<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow">Math.pow - MDN</a> </li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch">switch - MDN</a> </li>
</ul>

### More Help?
Slack us 😉



### Example Code: 😉
```Typescript
export function parse(data: string): number[] {
  let v = 0,
    result: number[] = [];
  for (let d of data.split('')) {
    switch (d) {
      case 'i':
        v++;
        break;
      case 'd':
        v--;
        break;
      case 's':
        v *= v;
        break;
      case 'o':
        result.push(v);
    }
  }
  return result;
}
```
### Output

```Typescript
export function parse(data: string): number[] {
  let init:number = 0;
  let retArr:number[] = [];
  data.split('').forEach((item)=> {
    switch(item) {
        case('i'): return init+=1;
        case('d'): return init-=1;
        case('s'): return init=init**2;
        case('o'): return retArr.push(init);
        default: break;
    }
  })
  return retArr;
}
```



### NEXT

<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%208%20Typescript/Week%20challenges%20(Thursday)%20.md"> Week challenges (Thursday) 💻
</a>

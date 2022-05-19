# THURSDAY 🗓️
## What's Your Poison?

### KATA #1
The Riddle

<p>The Riddle
The King of a small country invites 1000 senators to his annual party. As a tradition, each senator brings the King a bottle of wine. Soon after, the Queen discovers that one of the senators is trying to assassinate the King by giving him a bottle of poisoned wine. Unfortunately, they do not know which senator, nor which bottle of wine is poisoned, and the poison is completely indiscernible.

However, the King has 10 lab rats. He decides to use them as taste testers to determine which bottle of wine contains the poison. The poison when taken has no effect on the rats, until exactly 24 hours later when the infected rats suddenly die. The King needs to determine which bottle of wine is poisoned by tomorrow, so that the festivities can continue as planned.

Hence he only has time for one round of testing, he decides that each rat tastes multiple bottles, according to a certain scheme.

Your Task
You receive an array of integers (0 to 9), each of them is the number of a rat which died after tasting the wine bottles. Return the number of the bottle (1..1000) which is poisoned.

Good Luck!</p>

Hint: think of rats as a certain representation of the number of the bottle...</p>

### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">reduce - MDN</a> </li>
  <li><a href="https://www.schoolcoders.com/data-representation/binary/powers-of-two/">Take in minds this</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow">Math.pow - MDN</a> </li> 
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```javascript
function find(rats) {
  return rats.reduce((prev, curr) => {
    return prev + Math.pow(2, curr);
  }, 0);
}
```

### My Solution

```javascript
function find(rats) {
  return rats.reduce(function(previous, current){
      previous = previous + Math.pow(2, current);
      return previous;
    },0);

}
```

### KATA #2
Array.diff

<p>Array.diff
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

***arrayDiff([1,2],[1]) == [2]***
If a value is present in b, all of its occurrences must be removed from the other:

***arrayDiff([1,2,2,2,3],[2]) == [1,3]***</p>

Hint: think of rats as a certain representation of the number of the bottle...</p>

### Helpful Resources 📖
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter - MDN</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf - MND</a> </li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">includes- MDN</a> </li> 
</ul>

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```javascript
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
```

### My Solution
```javascript
function arrayDiff(a, b) {
  return a.filter((diff) => !b.includes(diff));
}
```

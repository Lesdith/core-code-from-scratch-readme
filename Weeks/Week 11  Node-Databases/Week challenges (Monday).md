## BACK
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2010%20React-Node/Week%2010.md">WEEK 10</a>

# Forrest Gump Ping-Pong API 🏓:
Create a simple REST API with which you can play ping-pong.

## API Requeriments:
  <ul>
  <li>Use Express JS to build the API.</a></li>
   <li>Use any port you want for the API.</a></li>
    <li></a></li>
   <li>Watch this <a href="https://www.youtube.com/watch?v=hQAHSlTtcmY"> video </a></li>
    <li>Watch this <a href="https://www.youtube.com/watch?v=N3AkSS5hXMA"> video </a></li>
   <li>Watch this <a href="https://www.youtube.com/watch?v=hQAHSlTtcmY"> video </a></li>
</ul>

# KATA
 ### Description 📖
<ul>
You decide to create a simple list of your favourite Easter eggs in React.
</ul>


### Challenge
<ul>
 Learn about nesting and listing React components.
      <li> 
      The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
      </li>
      <li>
      Loop through the props.eggs to output a unorder list of Easter eggs.
      </li>
      <li>
      Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
      <li> 
      Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.
      </li>
</ul> 

### About keys in React lists
While you can use the index of the array for a key because they should be unique among their siblings. However it is better to use unique values.

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

### Example Code: 😉
```javascript
import React from 'react';
export const EggList = (props) => {
  return <ul>{props.eggs.map((egg, index) => <EasterEgg key={index} name={egg}/>)} </ul>
};
export const EasterEgg = (props) => {
  const name = props.name;
  return( <li key={name} >{name}</li>)
};
```


 ### Days of week
 <ul>
  <li>
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%2010%20React-Node/Wednesday/Wednesday.md"> Week challenges (Wednesday) 💻 </a>
 </li>
 </ul>








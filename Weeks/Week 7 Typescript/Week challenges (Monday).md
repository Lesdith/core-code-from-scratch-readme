# BACK TO TOP
<ul>
<li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Week%207.md"> WEEK 7 </a> </li>
</ul>

# Monday 🗓️
## Find The Missing Letter

### Input/Output

### Description 📖
<ul>
  You can read about the package <a href="https://www.npmjs.com/package/enquirer">here</a> the idea is that you can see what can be done with it.
</ul>

### Download and start the example project 📖
<ul>
  <center>
  You can find the example project <a href="https://github.com/corecodeio/devguide-from-scratch-2022-   02/blob/main/src/technologies/2022/week07/exercises/e00/desc/assets/inout.zip">here</a> , download the project and unzip it, then install the packages for the project (npm install) and try the project (npm start), check for the Main class. pd: to compile the typescript files, remember to use npx tsc --w 😉.
  </center>
</ul>

###  Input class 
<ul> 
    The Input class is the required class for the input and oput in our example project, you can see that it is using the enquirer package, check this class on the example project or <a href"https://github.com/corecodeio/devguide-from-scratch-2022-02/blob/main/src/technologies/2022/week07/exercises/e00/desc/assets/Input.ts"> here </a>.
</ul>

###  Input class Documentation
### Input
<ul> 
  <li>
    Function: 
    <ul>
      <li> 
      getInput
      </li>
    </ul>
  </li>
  <li>
  Arguments: 
    <ul>
      <li> 
     message (string)t
      </li>
    </ul>
  </li>
   <li>
  Output: 
    <ul>
      <li> 
        Object
      </li>
    </ul>
  </li>
</ul> 



### Example Code: 😉
```Typescript
import { Input } from './Input';
export class Main {
  async start() {
    // Get a single input prompt
    let input = await Input.getInput('Where are you from?');
    console.log(input);
  }
}
```
### Output

```Typescript
{
  data: 'Guatemala',
}
```

![image](https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Guatemala.gif)


### Form
<ul> 
  <li>
    Function: 
    <ul>
      <li> 
      getForm
      </li>
    </ul>
  </li>
  <li>
  Arguments: 
    <ul>
      <li> 
     message (string)t
      </li>
      <li> 
        choices (Choices[])
      </li>
    </ul>
  </li>
   <li>
  Output: 
    <ul>
      <li> 
        Object
      </li>
    </ul>
  </li>
</ul>

### Example code:
```typescript 
import { Input } from './Input';
export class Main {
  async start() {
    // Get a form prompt
    const formChoices = [
      { name: 'age', message: 'What is your age' },
      { name: 'lastName', message: 'What is your last name' },
      { name: 'movie', message: 'What is your favorite movie' },
    ];
    let input = await Input.getForm('Personal Information', formChoices);
    console.log(input);
  }
}
### Output:

```

```Typescript 
{
  data: { age: '30', lastName: 'Terraza', movie: 'Tinkerbell' }
}
```

![image](https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Information.gif)


### Select
<ul> 
  <li>
    Function: 
    <ul>
      <li> 
      getSelect
      </li>
    </ul>
  </li>
  <li>
  Arguments: 
    <ul>
      <li> 
     message (string)t
      </li>
      <li> 
        choices (SelectChoices[])
      </li>
    </ul>
  </li>
   <li>
  Output: 
    <ul>
      <li> 
        Object
      </li>
    </ul>
  </li>
</ul>

### Example code:
```typescript 
import { Input } from './Input';
export class Main {
  async start() {
    // Get a select prompt
    const selectChoices = [
      { option: 1, message: 'Pizza' },
      { option: 2, message: 'Sandwich' },
      { option: 3, message: 'Cofee' },
      { option: 4, message: 'Lasagna' },
    ];
    let input = await Input.getSelect('Menu', selectChoices);
    console.log(input);
  }
}

### Output:
```

```Typescript 
{
  data: 2,
}
```

![image](https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Menu.gif)



### Select by ID
<ul> 
  <li>
    Function: 
    <ul>
      <li> 
      getSelectById
      </li>
    </ul>
  </li>
  <li>
  Arguments: 
    <ul>
      <li> 
     message (string)t
      </li>
      <li> 
        choices (Choices[])
      </li>
    </ul>
  </li>
   <li>
  Output: 
    <ul>
      <li> 
        Object
      </li>
    </ul>
  </li>
</ul>

### Example code:
```typescript 
import { Input } from './Input';
export class Main {
  async start() {
    // Get a select by id prompt
    const selectByIdChoices = [
      { name: '#64b5f6', message: 'Blue Lighten 2' },
      { name: '#009688', message: 'Purple Lighten 1' },
      { name: '#ec407a', message: 'Pink Lighten 1' },
      { name: '#f44336', message: 'Red' },
    ];
    let input = await Input.getSelectById('Select a color', selectByIdChoices);
    console.log(input);
  }
}
```
 ### Output:
```Typescript 
{
  data: '#64b5f6',
}
```

![image](https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Color.gif)



### Confirm
<ul> 
  <li>
    Function: 
    <ul>
      <li> 
      getConfirm
      </li>
    </ul>
  </li>
  <li>
  Arguments: 
    <ul>
      <li> 
     message (string)t
      </li>
    </ul>
  </li>
   <li>
  Output: 
    <ul>
      <li> 
        Object
      </li>
    </ul>
  </li>
</ul>

### Example code:
```typescript 
import { Input } from './Input';
export class Main {
  async start() {
    // Get a confirmation prompt
    let input = await Input.getConfirm('Are you a developer');
    console.log(input);
  }
}
```
 ### Output:
```Typescript 
{
  data: true,
}
```

![image](https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Developer.gif)


### Continuation

<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Week%20challenges%20(Tuesday).md"> Week challenges (Tuesday) 💻
</a>

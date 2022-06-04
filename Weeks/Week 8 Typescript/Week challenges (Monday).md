
# BACK 
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


### NEXT

<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Week%20challenges%20(Tuesday).md"> Week challenges (Tuesday) 💻
</a>

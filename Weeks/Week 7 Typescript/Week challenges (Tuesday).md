# BACK 
<ul>
<li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Week%207.md"> WEEK 7 </a> </li>
<li><a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Week%20challenges%20(Monday).md"> Week challenges (Monday) 💻 </a> </li>
</ul>
    

# Tuesday 🗓️
## Menu
### Description 
You are working at a restaurant, your task is to create the main menu, here are the specifications of the menu. The menu should have the following food:
<ul>
  <li>
  Soup
    <ul>
      <li> Wonton Soup (Chicken).... $2.25 </li>
      <li> Chicken Corn Soup.... $1.95 </li>
      <li> Vegetable Corn Soup... $2.25 </li>
    </ul>
  </li>
  <li>
    Chef's Specials
    <ul>
      <li> Orange Beef.... $8.95</li>
      <li> Kung Pao Shrimp.... $8.50</li>
    </ul>
  </li>
   <li>
    Chicken
    <ul>
      <li> Lemon Chicken.... $9.95 </li>
      <li> Sesame Chicken.... $9.95 </li>
      <li> Hunan Chicken.... $10.50 </li>
    </ul>
  </li>
   <li>
      Beef
    <ul>
      <li> Pepper Steak.... $9.95 </li>
      <li> Manchurian Beef... $11.95 </li>
    </ul>
  </li>
 <li>
    Beverages
    <ul>
      <li> Piña Colada.... $3.00 </li>
      <li> Spanish Coffee.... $5.50 </li>
    </ul>
  </li>
  </ul>

Your Lead tells you that you need to do this by putting in practice the OOP principles that you know, the specifications are this ones:

<ul>
  <li> 
   Create a class with the name MenuElement, this class would be the representation of each of the sub options for every main category in the menu, this class needs to    have the following:
    <ul>
      <li> Attributes:</li>
      <ul>
        <li> id (string) </li>
        <li> name (string) </li>
        <li> price (number) </li>
        <li> emoji (string) </li>
        <li> Methods </li>
        <li> printOption </li>
      </ul>
    </ul>
  </li>
    <li>When creating an instance of the class, you should pass the name, price, and an emoji related to the option you are selecting (please do not repeat the           emojis). </li>
   <li> When the instance is being created (in the constructor method) you should assign a unique id for that object. Check the Unique Id section.  </li>
   <li> The printOption method should return a string with the following format: <NAME_OF_THE_OPTION>....$<PRICE_OF_THE_OPTION>, for example: Spanish Coffee.... $5.50    </li>
   <li> 
    Create a class with the name Menu, this class would be the main class for the menu, it should have the following attributes
    <ul>
        <li> mainMenu (SelectChoice[]): This attribute is to represent the options in the main menu, the type of this attribute should be of SelectChoice, this type is declared in the Input class</li>
        <li> soupMenu (Choice[]) </li>
        <li> chefSpecialsMenu (Choice[]) </li>
        <li> chickenMenu (Choice[]) </li>
        <li> beefMenu (Choice[]) </li>
        <li> beveragesMenu (Choice[]) </li>
        <li> soupOptions (MenuElement[]) </li>
        <li> chefSpecialsOptions (MenuElement[]) </li>
        <li> chickenOptions (MenuElement[]) </li>
        <li> beefOptions (MenuElement[]) </li>
        <li> beveragesOptions (MenuElement[]) </li>
    </ul>
     <li>Each of the listed elements with the MenuElement[] type are going to be arrays with instances representing each of the sub-menu elements and each instance inside this array should have the respective information associated with the sub menu option, for example, the beveragesOptions attribute should have instances with the information of the piña colada and spanish coffee options.
     </li>
     <li>
       Each of the listed elements with the Choice[] type are going to be arrays with objects representing each of the options to show in the menu to the user, so for example if the user selects the Beverages option in the menu menu, your program should read the sub options related to this main option and print does options, Piña Colada.... $3.00, Spanish Coffee.... $5.50 for the user to select and option, this Choice type is declared in the Input class.
     </li>
     <li>
       For the method that you need in the Menu class, you need to define the following
       <ul><li> fillMainMenu </li> 
        <li> fillOptions </li> 
        <li> fillSubMenus </li>
        <li> showMainMenu </li>
        <li> showSubMenu </li>
       </ul>
     </li>
  </li>
  </ul>
<ul>
  <li> This class would have an empty constructor, so no arguments are passed to the creation of an instance of the menu.
When creating a menu, you should call the following methods in the following order, calling this methods in that order would prepare the Menu class to show the menu to the user. 
    <ul> 
        <li> fillMainMenu </li>
        <li> fillOptions </li>
        <li> fillSubMenus</li>
    </ul>
  </li>
</ul>
<ul>
  <li>
    fillMainMenu: This method would not return anything, this would only fill the main options in the menu, remember that each option should be of type SelectChoice.
  </li>
  <li>
    fillOptions: This method would not return anything and would be the method in charge of add the different options for each sub menu, (fill the attributes of type Choice[]) with the correct information, so for example, for the soupOptions attribute, you should add 3 MenuElement instances (Wonton soup, Chicken Corn soup and Vegetable Corn soup).
  </li>
  <li>
    fillSubMenus: This method would not return anything and would be the method in charge of creating the options that are going to be printed to the user, because this method would be called after calling the fillOptions menu, you can use each of the attributes of type Choice[] example soupOptions , to fill the menu options, so again, for example the soupMenu attribute should be filled with the choices inside the soupOptions attribute. Remember that each of the elements inside the soupMenu should be of Choice type, so for the name key of the object, you should use the unique id of the MenuElement you are going to add, and the message should be the output of the printOption method of each MenuElement you are adding. So for Example, if you are filling the soupMenu, you need to iterate for each of the soupOptions attribute, yo get the instance and then you get the need it values to fill a soupMenu option (Choice).
  </li>
  <li>
    
showMainMenu: Here you will show the main menu to the user, this method would be called from the Main class, when called, you should print the menu menu and wait for the user to select, after selecting, you should check for the option the user selected, and show the sub-menu related to that option. So for example, you show the main menu and the user selects Soup, you should then show the Soup Sub menu for the user to select an option of that sub-menu. Take in mind that here you should also show an Exit option, for the user to terminate your program.
  </li>
  <li>
    showSubMenuOption: This method would be called from showMainMenu on each of the options, except when the user decides to exit your program. This method should         receive the following arguments
    <ul>
      <li>
        message (string) : Message to show in the sub menu
      </li>
       <li>
        subMenu (Choice[]): The elements to show in the sub menu
      </li>
       <li>
        subMenuOptions (MenuElement[]): The options that are related to the sub menu
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li> 
    The showSubMenuOption should be in charge to show the selected sub-menu from showMainMenu option selected, and then if the user selects and option from that sub-menu, your program need to show the following message : “Here is your <EMOJI_OF_THE_SELECTED_OPTION> at a $<PRICE_OF_THE_SELECTED_OPTION> cost”, the idea is to show the subMenu options and then find the selected option inside the subMenuOptions elements and show the emoji and price information to the user.
  </li>
  <li>
   Remember that after the user has selected an option of the sub-menu, the user gets the message with the information of the selected option (emoji and price) and then the main menu is shown again to the user, to select the next option or to exit the program.
  </li>
  <li>
  The Main class should only need to have the creation of an instance of the class menu and the call for the showMainMenu option.
    </li>
</ul>


## TIP 📖
Use the Input class to create the menu and sub-menus
    
## Unique Id
To create a unique id, you can use an exernal package,<a href="https://www.npmjs.com/package/uuid">uuid</a> along with <a href="https://www.npmjs.com/package/@types/uuid">@types/uuid</a> package to get this package working with types, for that here is an example on how to use the package:
  
```
  $ npm install uuid
  $ npm install --save @types/uuid 
```
  
```typescript
    import { v4 as uuidv4 } from 'uuid';
    let uniqueId = uuidv4(); // this would return a unique id  
```

    
## Start Code 
### Index.ts
```typescript
    import Main from './Main';

    const program = new Main();
    program.start();
```
### Main.ts
```typescript
   import Menu from './models/Menu';
export default class Main {
  async start() {
    const menu = new Menu();
    await menu.showMainMenu();
  }
}   
```
### NEXT
    
### Continuation    
<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%207%20Typescript/Week%20challenges%20(Wednesday).md"> Week challenges (Wednesday) 💻</a>
    

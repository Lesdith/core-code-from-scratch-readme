# BACK

<a href="https://github.com/Lesdith/core-code-from-scratch-readme/blob/main/Weeks/Week%206%20Typescript/Week%206.md"> WEEK 6 </a>


# THURSDAY 🗓️
## Tile

### EXERCISE #1
Duplicate EncoderTile

### Description
In the board game Scrabble2, each tile contains a letter, which is used to spell words, and a score, which is used to determine the value of words.

<ol>
  <li> Write a definition for a class named Tile that represents Scrabble tiles. The instance variables should be a string named letter and an number named value. </li>
  <li> Write a constructor that takes parameters named letter and value and initializes the instance variables. </li>
  <li> Write a method named printTile that prints the instance variables in a reader-friendly format (not the { ... } format way).</li>
  <li> Don't worry you don't have to check if the letter is no more than one String length.</li>
  <li> You can use this Main class to test your code.</li>
</ol>
  
Examples

```
import { Tile } from './Tile';
export class Main {
  start() {
    const A = new Tile('A', 10);
    A.printTile(); // Example of a reader-friendly format above
    /*
      ==================
        Letter: A
        Value: 10
      ==================
    */
    const W = new Tile('W', '50'); // This should show and error
  }
}
```
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



## Solutions
### CORE CODE 

```typescript
export class Tile {
  letter: string;
  value: number;

  constructor(letter: string, value: number) {
    this.letter = letter;
    this.value = value;
  }

  printTile() {
    console.log(`
        ===========================
          Letter: ${this.letter}
          Value: ${this.value}
        ===========================
    `);
  }
```


## TIME
### EXERCISE #2
TIME

### DESCRIPTION

<ol>
  <li> Write a definition for the class name Time this class would be use to build a digital clock. This class should have 3 attributes of type number. hour, minute and second. </li>
  <li> Write a constructor that takes parameters named hour, minute and second and initializes the instance variables. </li>
  <li> Write a method called getInSeconds that returns a number representing the actual time in the instance represented in seconds.</li>
  <li> Write a method named printTime that prints the instance variables in a reader-friendly format (not the { ... } format way).</li>
</ol>


```
import { Time } from './Time';
export class Main {
  start() {
    const t = new Time(10, 45, 1);
    t.printTime(); // Example of a reader-friendly format above
    /*
      ==================
        Hours: 10
        Minutes: 45
        Seconds: 1
      ==================
    */
    console.log(t.getInSeconds()); // 38701
  }
}
```

### More Help?

Slack us 😉

## Solutions
### CORE CODE 
```typescript
export class Time {
  hour: number;
  minute: number;
  second: number;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  printTime() {
    console.log(`
        ===========================
          Hours: ${this.hour}
          Minutes: ${this.minute}
          Seconds: ${this.second}
        ===========================
    `);
  }

  getInSeconds(): number {
    const minutes = this.hour * 60 + this.minute;
    return minutes * 60 + this.second;
  }
}
```


## Rational
### EXERCISE #3
Rational

### DESCRIPTION

A rational number is a number that can be represented as the ratio of two integers. For example, 2/3 is a rational number, and you can think of 7 as a rational number with an implicit 1 in the denominator (7/1). For this assignment, you are going to write a class definition for rational numbers.  

<ol>
  <li> Create a new class named Rational. A Rational object should have two number instance variables to store the numerator and denominator.</li>
  <li> Write a constructor for your class that takes two arguments and that uses them to initalize the instance variables. </li>
  <li> Write a method called printRational that prints the object in some reasonable format.</li>
  <li> Write a method called invert that inverts the number by swapping the numerator and denominator. This method should modify the instance variables.</li>
  <li> Write a method called toFloat that converts the rational number to a floating-point number and returns the result. This method is a pure function it does not modify the object. </li>
  <li> Write method named reduce that reduces a rational number to its lowest terms by finding the greatest common divisor (GCD) of the numerator and denominator and dividing through. This method should modify the instance variables. To calculate the GCD you can search for Euclidian Algorithm: GCD.</li>
</ol>

```
import { Rational } from './Rational';
export class Main {
  start() {
    const r1 = new Rational(36, 120);
    r1.printRational(); // 36 / 120
    console.log(r1.toFloat()); // 0.3
    r1.reduce();
    r1.printRational(); // 3 / 10
    r1.invert();
    r1.printRational(); // 10 / 3
    r1.reduce();
    r1.printRational(); // 10 / 3
  }
}
```

### More Help?
Slack us 😉

## Solutions
### CORE CODE 
```typescript
export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  printRational() {
    console.log(`${this.numerator} / ${this.denominator}`);
  }

  invert() {
    [this.numerator, this.denominator] = [this.denominator, this.numerator];
  }

  toFloat(): number {
    return this.numerator / this.denominator;
  }

  gcd(n: number, d: number): number {
    if (d == 0) return n;
    return this.gcd(d, n % d);
  }

  reduce() {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator = this.numerator / gcd;
    this.denominator = this.denominator / gcd;
  }
}
```






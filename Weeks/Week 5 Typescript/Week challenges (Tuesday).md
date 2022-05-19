
# Tuesday 🗓️
## Leer #1
<ul> <a href="https://www.typescriptlang.org/docs/handbook/intro.html">TypeScript Handbook</a></ul>
## Leer #2
<ul> <a href="https://blog.logrocket.com/types-vs-interfaces-in-typescript/">Type vs interface in TypeScript</a></ul>

## Exercise No.1 OBJECT TYPE: Given the data, define the interface "User" and use it accordingly.
<a href="https://typescript-exercises.github.io/#exercise=1">Object Type</a>

### SOLUTION
```typescript
export interface User{
    name: string;
    age: number;
    occupation: string; 
}

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(' -${user.name}, ${user.age}');
    
    
}
users.forEach(logPerson);
console.log('User:');
```
## Exercise No. 2 OBJECT TYPE "Person" is missing, please define it and use it in persons array and logPerson function in order to fix all the TS errors.
<a href="https://typescript-exercises.github.io/#exercise=2&file=%2Findex.ts">Object Type</a>

### SOLUTION
``` typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[]= [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

```

## Exercise No. 3 UNIONS: Fix type errors in logPerson function. logPerson function should accept both User and Admin and should output relevant information according tothe input: occupation for User and role for Admin.
<a href="https://typescript-exercises.github.io/#exercise=3&file=%2Findex.ts">Unions</a>

### SOLUTION
``` typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

```
## Exercise: No.4 UNIONS: Figure out how to help TypeScript understand types inthis situation and apply necessary fixes.
<a href="https://typescript-exercises.github.io/#exercise=4&file=%2Findex.ts">Unions</a>

### SOLUTION
``` typescript
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person):person is Admin{
    return person.type === 'admin';
}

export function isUser(person: Person):person is User {
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
```

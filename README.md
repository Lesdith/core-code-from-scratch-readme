# core-code-from-scratch-readme
# I'm Lesvia, Systems Engineer. Currently I have only developed University Projects, I would like to be able to specialize and expand my knowledge as a software developer that helps solve problems in multinational companies. I am a self-taught and committed person who likes challenges.

Compiled languages are automatically prepared to run, a bit flexible and require compilation, while interpreted languages are cross-platform, easy to test, bugs are much easier to catch, an interpreter is required, their source code is publicly accessible and they are often slow.

# Is Java compiled or interpreted, or both?
java is compiled and interpreted


# Pseudocodigo
```
1.start process
2.Define btc, usd, change as integers;
3.Define btc = 0.000022;
  4.Write “Enter the amount of dollars you want to convert:”;
  5.read usd;
  6.change <- (usd * btc);
  7.Write “The change to today is:”, change;
8.end process
'''
```
# Your date of birth in the matrix?
```
** My date of birth is 12/23/2023 **

**1100/10111/11111000111**

It is solved by dividing the value by two, decimal values are not taken, only integer values, in the event that we get a decimal value, it means that we have 1 left over.

- 23 / 2 = 11 -> 11*2 = 22 residue 1 because 23-22=1
- 11 / 2 = 5 residue 1
- 05 / 2 = 2 residue 1 
- 02 / 2 = 1 residue 0
- 01 / 2 = 0 residue 1

-- we order them from bottom to top
--- Result:  10111

- 12 / 2 = 6 residue 0
- 6 / 2 = 3 residue 0
- 3 / 2 = 1 residue 1
- 1 / 2 = 0 residue 1

-- we order them from bottom to top
--- Result:  1100

- 1991 / 2 = 995 residue 1
- 995 / 2 = 497 residue 1
- 497 / 2 = 248 residue 1
- 248 / 2 = 124 residue 0
- 124 / 2 = 62 residue 0
- 62 / 2 = 31 residue 0
- 31 / 2 = 15 residue 1
- 15 / 2 = 7 residue 1
- 07 / 2 = 3 residue 1
- 03 / 2 = 1 residue 1
- 01 / 2 = 0 residue 1

-- we order them from bottom to top
--- Result:  11111000111


 ```
 MIPS
 ```
 # Ejercicio 1
 
 .data
        welcome: .asciiz "\nSum of 2 numbers\n"
        result: .asciiz "\nResult:"
        number_one_msg: .asciiz "\nEnter a number: "
        number_two_msg: .asciiz "\nEnter a number: "
  .text
        main:
              # welcome message
              li $v0, 4
              la $a0, welcome
              syscall

              # user input
              li $v0, 4
              la $a0, number_one_msg
              syscall

              li $v0, 5
              syscall

              # saving user input
              move $t0, $v0

              # user input
              li $v0, 4
              la $a0, number_two_msg
              syscall

              li $v0, 5
              syscall

              # saving user input
              move $t1, $v0

              # adding the user numbers
              add $t2, $t0, $t1
              
              # showing result number
              li $v0, 4
              la $a0, result
              syscall

              # printing number
              li $v0, 1
              move $a0, $t2
              syscall


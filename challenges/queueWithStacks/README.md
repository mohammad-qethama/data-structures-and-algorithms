# Challenge Summary
<!-- Description of the challenge -->
building  psuedoQueue class using two Stack classes, and methods
## Whiteboard Process
<!-- Embedded whiteboard image -->

![Whiteboard Image](./1.jpg)
![Whiteboard Image](./2.jpg)
![Whiteboard Image](./3.jpg)


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- `enqueue(val)` push element into stackone,(1)(1)
- `dequque()` test if stack two is empty,if `true`, then loop through stack one while popping its values and push it to the second stack this will flip the order of stack one in stack two , then pop stack tow and return its top value to the user.(1)(n)


## Challenge

- [X] Top-level README “Table of Contents” is updated
- [X] README for this challenge is complete
       - [X] Summary, Description, Approach & Efficiency, Solution
       - [X] Picture of whiteboard
- [X] Feature tasks for this challenge are completed
- [X] Unit tests written and passing
       - [X] “Happy Path” - Expected outcome
       - [] Expected failure
       - [X] Edge Cases

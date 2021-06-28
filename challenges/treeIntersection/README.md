# Challenge Summary
<!-- Description of the challenge -->
write a function that takes tow tree as an input and return an array of the intersected elements between them.  
## Whiteboard Process
<!-- Embedded whiteboard image -->

![Whiteboard Image](WB.svg)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
`treeIntersection` store the first tree in a hash table then travers over the second tree elements if the element is in the hash_table that means its a shared value between them so push it in an array after that return the array Big O Space(n)/ Big O Time(n)

## Challenge

- [X] Top-level README “Table of Contents” is updated
- [x] README for this challenge is complete
       - [X] Summary, Description, Approach & Efficiency, Solution
       - [X] Picture of whiteboard
- [X] Feature tasks for this challenge are completed
- [X] Unit tests written and passing
       - [X] “Happy Path” - Expected outcome
       - [X] Expected failure

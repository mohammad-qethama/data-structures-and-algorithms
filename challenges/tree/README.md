# Challenge Summary
<!-- Description of the challenge -->
building BinaryTree class with ordering methods  and BinarySearchTree classes with method to create proper BST and search its node elements.  

## Whiteboard Process
<!-- Embedded whiteboard image -->

![Whiteboard Image](WB.svg)



## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- `preOrder` use root-left-right ordering approach to create an ordered tree value array (n)(n).
- `InOrder` use left-root-right ordering approach  to create an ordered tree value array (n)(n).
- `PostOrder` use left-right-root ordering approach to create an ordered tree value array (n)(n).
- `add(val)`  traverse through the BST and place nodes with `value` in a proper way that keep the tree a BST o(1)(h) where h = the tree hight .
- `add(val)` traverse through the BST and look for `value` in the tree node value return true or false o(1)(n)

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

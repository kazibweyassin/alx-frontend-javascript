JavaScript Hoisting
Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.
Features of Hoisting:

    In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
    It allows us to call functions before even writing them in our code.

<!-- Variable scope -->
global scope: variables declared globally(outside the function) have global scope and global varibales can be accessed anywhere in the program.

    local scope: variables declared inside a function become local to the function.

The `let` keyword works. It shows that variables declared with `let` are only available within the block they're defined and don't affect variables with the same name outside the block.
    difference between let and const
    Let allows reassignment of values while const does not.
     with let you can declare a varibel and assign a value to it and layer reassign a different value to the same variable.

<!-- Arrow functions  -->
    arrow functions expressions is a compact alternative to traditional expression 
**    <!-- key things to note: -->
**        arrow functions dont have their own bindings to "this" keyword
        can not be used as constructors
        can not use yeild within their bidy and can be created as generator functions. 
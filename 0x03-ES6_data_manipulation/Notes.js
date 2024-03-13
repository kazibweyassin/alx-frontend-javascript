// // // JavaScript Hoisting
// // // Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.
// // // Features of Hoisting:

// // //     In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
// // //     It allows us to call functions before even writing them in our code.

// // // <!-- Variable scope -->
// // // global scope: variables declared globally(outside the function) have global scope and global varibales can be accessed anywhere in the program.

// // //     local scope: variables declared inside a function become local to the function.

// // // The `let` keyword works. It shows that variables declared with `let` are only available within the block they're defined and don't affect variables with the same name outside the block.
// // //     difference between let and const
// // //     Let allows reassignment of values while const does not.
// // //      with let you can declare a varibel and assign a value to it and layer reassign a different value to the same variable.

// // // <!-- Arrow functions  -->
// // //     arrow functions expressions is a compact alternative to traditional expression 
// // // **    <!-- key things to note: -->
// // // **        arrow functions dont have their own bindings to "this" keyword
// // //         can not be used as constructors
// // //         can not use yeild within their bidy and can be created as generator functions. 
        
// // // const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// // // console.log(materials.map((material) => material.length));
// // // // Expected output: Array [8, 6, 7, 9]
// // // spread operator 
// // // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// // // *The spread operator is often used in combination with destructuring.

// // // const numbers = [1, 2, 3];
// // // const copiedNumbers = [...numbers]; // Copying the array

// // // const fruits = ['apple', 'banana', 'orange'];
// // // const vegetables = ['carrot', 'broccoli', 'spinach'];
// // // const combined = [...fruits, ...vegetables]; // Merging arrays

// // // function sum(a, b, c) {
// // //     return a + b + c;
// // // }
// // // const numbers = [1, 2, 3];
// // // const result = sum(...numbers); // Passing multiple arguments to a function
// // //  computed property names
// // //   That allows you to put an expression in square brackets [] , that will be computed and used as the property name. 
// // //   This is reminiscent of the bracket notation of the property accessor syntax, which you may have used to read and set properties already.
// // //   ES6's "Computed Property Names" feature allows you to have an expression (a piece of code that results in a single value like a variable or function invocation) be computed as a property name on an object.

// // // For example, say you wanted to create a function that took in two arguments (key, value) and returned an object using those arguments. Before Computed Property Names, because the property name on the object was a variable (key), you'd have to create the object first, then use bracket notation to assign that property to the value.

// // // function objectify (key, value) {
// // //   let obj = {}
// // //   obj[key] = value
// // //   return obj
// // // }

// // // objectify('name', 'Tyler') // { name: 'Tyler' }

// // // However, now with Computed Property Names, you can use object literal notation to assign the expression as a property on the object without having to create it first. So the code above can now be rewritten like this.

// // // function objectify (key, value) {
// // //   return {
// // //     [key]: value
// // //   }
// // // }

// // // objectify('name', 'Tyler') // { name: 'Tyler' }


// // // //objects 
// // // //object initializes are called object literals 
// // JavaScript Primitives

// // A primitive value is a value that has no properties or methods.

// // 3.14 is a primitive value

// // A primitive data type is data that has a primitive value.

// // // JavaScript defines 7 types of primitive data types:
// Examples

//     string
//     number
//     boolean
//     null
//     undefined
//     symbol
//     bigint

// objects are like a container that can store multiple values.
// objects can contain multiple key value pairs.
// name : value pairs are called properties.
// objects is collection of named values
// objects are delcared with ## const keyword.
//javascripts objects are similar to dictionaries in python.
// javascript objects are containers for named values , called properties and methds

// object methods. 
// object creation 
// ...using object literals
// an object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).
//example 
//the person is the object and the properties are firstName, lastName, age, eyeColor
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};//...using the new keyword
//the following example also creates a new JavaScript object with four properties:
const persona = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;

person.eyeColor = "blue";
//reduce()
// reduces an arrays  values into one value


// The accumulator parameter is the single value that will be returned by the reduce() method. It will contain the value returned by the callback function in each iteration.
// 

// typed Array

// https://web.dev/articles/webgl-typed-arrays









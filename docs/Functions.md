# Functions 

A function is a set of statements that performs a task or calculates a value. In order to use functions
we must perform two steps:
- **define the function**: determine what statements we can group together for using them repeatedly
- **call the function**: execute the statements in various conditions

Jump to:
- Function definition and call
- Local variables
- Return values


### Function definition

In JavaScript, the function definition syntax is defined as follows:
```javascript
function doSomething(aValue, anotherValue) {
    // some code here
}
```
There are four parts of the function definition:
- the keyword `function`, which lets the runtime know that what follows should not be executed
right away but treated as a function definition
- the function name (`doSomething`): this is an identifier which typically represents an action 
(e.g. `computeSurface`, `startEngine`, `getSpeed`, `pop`) and we use it to reference the statements
that are associated with the function
- a list of arguments between round brackets `()`: a way of passing variables to the statements 
that we want to execute
    - argument lists can contain any number of variables that we wish to send to the function when
    calling it; it can also be empty (e.g. an array's `pop()` function does not require any 
    arguments, as opposed to `indexOf(value)` which has to know what element's position to return)
- a block of code between curly brackets `{}` (also called a *block statement*)

Let's consider the following function:
```javascript
function sayHelloTo(person) {
    console.log("Hello " + person)
}

sayHelloTo("Iulia");
// Hello Iulia

SayHelloTo("Ioana");
// Hello Ioana
```
In this example we use one argument (`person`) to provide a value into the expression 
`console.log("Hello " + person)`. This function expects that we always provide exactly one argument for
it to work correctly. In JavaScript, however, it is possible to provide more or less the number of 
arguments that a function defines:
```javascript
sayHelloTo(); // no arguments
// Hello undefined

sayHelloTo("Iulia", "Ioana", "Vali") // two extra arguments
// Hello Iulia
```

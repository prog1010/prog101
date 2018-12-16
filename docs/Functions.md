# Functions 

A function is a set of statements that performs a task or calculates a value. In order to use functions
we must perform two steps:
- **define the function**: determine what statements we can group together for using them repeatedly
- **call the function**: execute the statements in various conditions

Read about:
- [Function definition](#function-definition)
- Local variables


## Function definition

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
- a list of parameters between round brackets `()`: a way of passing values to the statements 
that we want to execute
    - parameter lists can contain any number of variables that we wish to send to the function when
    calling it; it can also be empty (e.g. an array's `pop()` function does not require any 
    parameters, as opposed to `indexOf(value)` which has to know what element's position to return)
- a block of code between curly brackets `{}` (also called a *block statement*)

Let's consider the following function:
```javascript
function sayHelloTo(person) {
    console.log("Hello " + person)
}

sayHelloTo("Iulia");
// Hello Iulia

sayHelloTo("Ioana");
// Hello Ioana
```
In this example we use one parameter (`person`) to provide a value into the expression 
`console.log("Hello " + person)`. This function expects that we always provide exactly one argument for
it to work correctly. In JavaScript, however, it is possible to provide more or less the number of 
arguments that a function defines:
```javascript
sayHelloTo(); // no arguments
// Hello undefined

sayHelloTo("Iulia", "Ioana", "Vali") // two extra arguments
// Hello Iulia
```
So far we have had functions that perform tasks, but we can also use functions to calculate values. For this 
we need to use the `return` statement: 
```javascript
function computeCircleArea(radius) {
    return 3.14 * radius * radius;    
}

function capitalize(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}

// what is the total area of some three circles?
var area1 = computeCircleArea(2);
var area2 = computeCircleArea(3);
var area3 = computeCircleArea(4);
console.log(area1 + area2 + area3)
```
If our function returns a value (using the `return` statement), we can use that value in an expression that
implicates the function call (e.g. `computeCircleArea(2)`). In the example above, the function call was
implicated in an assignment expression (`var area1 = computeCircleArea(2)`), but it could have just as easily
been a logical expression (e.g. `computeCircleArea(2) < 11`) or an arithmetic expression (`computeCircleArea(2) + 
computeCircleArea(3) + computeCircleArea(4)`).

## Variable number of arguments
So far we knew beforehand how many arguments we wanted to use in our functions (`radius`: one argument).
There are however certain situations where we don't know how many arguments our function may receive when 
called. Suppose we wanted to create a function that calculates the sum of all its arguments. We would use such 
a function like so:
```javascript
computeSum(23, 2); // 25
computeSum(17); // 17
computeSum(); // 0
computeSum(1,2,3,4,5,6,7); //28
```
In JavaScript we can use a special notation (`...` also called the rest parameters) in the argument list that will allow us to use all the 
arguments that are passed by using one identifier, just like an array:
```javascript
function computeSum(...values) {
    var result = 0;
    for (var i = 0; i < values.length; i++) {
        result = result + values[i];
    }
    return result;
}
```

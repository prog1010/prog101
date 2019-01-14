# Objects

In JavaScript objects are collections of values (similar to arrays or lists) that we can access by their name.
The names that we assign to values are also called *keys* or *properties* of the object.

The data structure behind an object implementation is also called a *dictionary* or *map** which we will
discuss later.

Just like arrays provide fast access to values based on their position (or index), objects provide fast access to 
values based on their name.

## Creating objets

Objects are created in JavaScript by using the *Object Notation*, that is, grouping a list of `key: value` pairs 
between curly brackets `{}` to obtain:
```
{
    key1: value1,
    key2: value2,
    ...
}
```

For example, say we wanted to create a `student` object and assign it to a variable:
```javascript
var student = {
    firstName: "Iulia",
    lastName: "Andra",
    age: 30,
    gender: "F",
    graduatedJSClass: true
}
```
Declaring an object on the right side (`b`) of an assignment expression (`a = b`) has the following effect:
* the object is stored into memory and a reference (think of this as the location inside the memory where 
the object is stored) is produced
* the **reference** to the object is stored in `a`

That means we can use `a` (in our case, the identifier `student`) to access the properties of the object.

The notion of *an objects name* is not relevant because objects are treated just like any other value 
(*e.g.* 3, true, "a string") and what is relevant is the way that we gain access to the value: through the name of 
the variable or identifier.

So, if variables store a reference to an object, that means that we can have multiple variables that store
the same reference:

```javascript
var student1 = {
    name: "Vali"
}

var student2 = student1;

// here, both student1 and student2 store
// the same refernence to the object { name: "Vali" }
```

## Keys (properties)

We have seen that in order to access information inside an array, we need to provide a **positive integer** (a 
round number >= 0) between *square brackets*; accessing values of an objects properties is similarly achieved by
using **string** values and the JavaScript syntax offers two ways of doing so:

```javascript
// method 1: using an identifier
student.firstName; //Iulia

// method 2: using a string value
student["firstName"]; //Iulia
```
Although keys are implicitly values, we can use identifiers as keys with the *dot notation*, as shown above with
`method 1`. Identifiers are typically not data (or values, they are part of the syntax) but using them to extract values from an object determines
an implicit conversion to a value type (which is `string`).

Using a string as a key requires the use of the **square brackets** (like for arrays) and this provides certain
advantages in situations where we need to construct the key from other values or use keys stored in other variables:

```javascript
var prop = "firstName";
console.log(student[prop]); // ~ student["firstName"] -> Iulia

// here we want to acces the firstName and lastName
// by using the `Name` part from a variable

var suffix = "Name";
student["first" + suffix]; // ~ student["firstName"] -> Iulia
student["last" + suffix]; // ~ student["lastName"] -> andra
```

Using `method 2` also allows us to use a list of properties stored somewhere else:

```javascript
// we make a list of properties that we want from the object
var properties = ["firstName", "lastName"];

// we cycle through the list of properties 
for (var i = 0; i < properties.length; i++) {
    // we use values from the list: properties[i]
    var key = properties[i];
    // we use the key that we computed to access the object value
    console.log(student[key]);
    // we can also write this in a more compact way
    // console.log(student[properties[i]]);
}
```

#### Getting all the keys
Sometimes it is useful to see all the keys that an object contains, and we can use a special version of the 
`for` loop to do this:

```javascript
for (var i in student) {
    console.log(i);
}
```
This causes `i` to progressively take the value of each key (property) stored in the object `student`, so that
we can print it with `console.log()`. As expected, all the values which `i` takes are strings:
```
"firstName"
"lastName"
"age"
"gender"
"graduatedJSClass"
```

The JavaScript Runtime API provides a function that collects all the keys and stores them in a list (array) called 
[Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys):
```javascript
var keys = Object.keys(student);
console.log(keys);
```
```json
["firstName", "lastName",  "age",  "gender", "graduatedJSClass"]
```
It is very easy to implement this function ourselves. Let's identify what this function does:
* takes an object as a parameter: `student`
* creates an array
* fills the array with the keys
* returns the array
```javascript
function keys(obj) {
    // create an empty array
    var result = []; 
    // cycle through the object properties
    for (var i in obj) {
        // add each key to the end of the array
        result.push(i);    
    }
    // return the array
    return result;
}

// test the function
var ks = keys(student);
console.log(ks);

// we can write this in a more compact form:
// console.log(keys(student));
```
```json
["firstName", "lastName",  "age",  "gender", "graduatedJSClass"]
```
## Property Values

An object property can hold any value that a JavaScript variable can hold, classified as such:
* primitives
    * booleans (`true`, `false`)
    * `null`
    * `undefined`
    * numbers (`42`, `3.14`, `NaN`)
    * strings (`"banana"`, `'apple'` )
    * ... (*Symbols**)
* objects
    * `Array`
    * `Object`
    * `Function`
    * Regular expressions
    * ...

The type of a value (not limited to an object property, this works for any value) can be determined at runtime 
by using the `typeof` operator in an unary expression:

```javascript
var i = 3;
var name = "Iulia"
var ok = true;

typeof i; // "number"
typeof 6; // "number"
typeof name; // "string"
typeof [1, 2, 3]; // "object"
typeof student; // "object"
```

Evaluating such expressions yields a string result. It can sometimes be useful to determine the type of a 
value at runtime, although this pattern is discouraged in practice and should be avoided.

To read more about types in JavaScript, check out 
[JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) on MDN.

The JavaScript Runtime API provides a function that collects all the **values** and stores them in a list (array) called 
[Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values):
```javascript
var keys = Object.values(student);
console.log(keys);
```
```json
["Iulia", "Andra",  30,  "F", true]
```
## Working with objects

At any time we can add, modify or delete properties of an object that we hold a reference to:

* adding properties
    ```javascript
    student.address = "Home Avenue no. 13";
    ```
* updating properties
    ```javascript
    student.firstName = "Maria";
    ```
* deleting properties
    ```javascript
    delete student.address;
    ```

#### Copying objects
We have discussed earlyer that using an assignment expression (`a = b`) does not actually copy an object but
only copies the reference to the object, so this has the following consequence:

```javascript
var iulia = {
    name: "Iulia"
}

console.log(iulia.name);
// Iulia

var vali = iulia;
vali.name = "Vali";

console.log(vali.name) // Vali
console.log(iulia.name) // also Vali
```

We can see that, after changing the `name` property from `"Iulia"` to `"Vali"`, both `var iulia` and `var vali` share the
same name because they are, in fact, pointing to the same memory location of a single object `{ name: "Vali" }`

Therefore, if our intention was to actually obtain an independent object but starting from the original `iulia`,
we would have had to:

```javascript

// create a new object
var iuliaCopy = {
    name: iulia.name
    // and assign the value from iulia.name
    // to the `name` property of the new object 
}

// now we can change the new object without altering the old one:
iuliaCopy.name = "Vali"

console.log(iuliaCopy.name); //Vali
console.log(iulia.name); // Iulia
```

In this example, where we have a small number of keys that we need to copy, we can do it by hand. Oftenly though,
objects will have more properties and clonining them requires more code. We can write a function that will copy
an object for us; it will have to:
* receive the object that we want to copy as a parameter (the *source*)
* create a new object (the *target*)
* for each key in the source, create the same key in the target and set its value from the source
* return the new object
```javascript
function copy(source) {
    // create the new object
    var target = {};
    for (var i in source) {
        // property name from source: i
        // property value from source: source[i]
        target[i] = source[i];
    }
    // return the target
    return target;
}

// now let's copy iulia
var vali = copy(iulia);
vali.name = "Vali"; // update the name

console.log(iuila.name); // Iulia
console.log(vali.name); // Vali
```

The JavaScript Runtime API offers an utility function called 
[Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
(see link for more details) which copies properties from one object to another, similarly to how our own `copy()` function does:
```javascript
var iuliaCopy = Object.assign({}, iulia);
```
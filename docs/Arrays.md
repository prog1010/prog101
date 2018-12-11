# Arrays 

An array is an ordered collection of data (either primitive or object depending upon 
the language). Arrays are used to store multiple values in a single variable. This is 
compared to a variable that can store only one value. 

Each item in an array has a number attached to it, called a numeric index, that allows 
you to access it. In JavaScript, arrays start at index zero and can be manipulated with 
various methods. 

(source: [MDN](https://developer.mozilla.org/en-US/docs/Glossary/array), 
[technical reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))

```javascript
var empty = []; // an empty array
var numbers = [ 1, 2, 3 ];
var strings = [ "one", "two", "three"]
```

We can access any element from the array by using its
position inside the array. Positions start from 0:


```javascript
console.log(numbers[0]); 
// 1
console.log(strings[1]);
// "two"
```

We can determine the size of an array by using the `.length` property:
```javascript
console.log(strings.length);
// 3
```

So now that we know the length of the array, we can use a `for` loop to go through all
the elements of the array:

```javascript
// note that we start from 0 and stop at length - 1
for (var i = 0; i < strings.length; i++) {
    console.log(strings[i]);
}
// "one"
// "two"
// "three"
```

## Useful array functions

We can use [.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 
and [.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) to add 
and remove elements at **the end of** an array:

```javascript
var a = [];

console.log(a);
// []

a.push(1);
a.push(2, 3);

console.log(a);
// [ 1, 2, 3 ]

var last = a.pop();

console.log(a);
// [ 1, 2 ]

console.log(last);
// 3
```

The functions [.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
 and [.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) work similarly, 
 but at **the begining** of the array:
 
 ```javascript
 var name = ["andra"];
 
 console.log(a);
 // [ "andra" ]
 
 a.unshift("iulia");
  
 console.log(a);
 // [ "iulia", "andra" ]
 
 var first = a.shift();
 
 console.log(a);
 // [ "andra" ]
 
 console.log(last);
 // "iulia"
 ```
 
 Finally, we can use [.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
 to insert or delete a number of values from the array:
 
```javascript

var a = [ 3, 2, 6, 5, 8];

// remove the 6
a.splice(2, 1) // start at index 2, delete 1 element
// [ 3, 2, 5, 8 ]


// insert a 9 and a 10 after 2
a.splice(2, 0, 9, 10) // start at index 2, delete 0 elements, insert 9, 10
// [ 3, 2, 9, 10, 5, 8 ]

// remove 2 and 9  and replace them with 11
a.splice(1, 2, 11)
// [ 3, 11, 10, 5, 8 ]

```

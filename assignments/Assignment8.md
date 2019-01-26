# #1
Write a function pluralize that takes in two arguments, a number and a word, and returns the plural (if there is more than one).

pluralize(5, 'cat'): '5 cats'   
pluralize(1, 'cat'): '1 cat'    
pluralize(7, 'turtle'): '7 turtles' 

# #2
Write a function named internationalize that:
	takes 1 argument, a language code (e.g. "es", "ro", de", "en")
	returns "Pineapple" for the given language, for atleast the above 4 languages. It should default to returning English.

internationalize("ro"): 'Ananas'  
internationalize("en"): 'Pineapple'  
internationalize(): 'Pineapple'  

# #3
Pick a penguin from Wikipedia's [List of Fictional Penguins](https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named `Penguin` with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).

### #1 
Add a method to your `Penguin` called `sayHello` that prints to the console the message "Hello, I'm a penguin and my name is [NAME HERE]!". Use the mystical, magical, all-powerful `this` keyword to access your penguin's name, so that way the `sayHello` method could potentially work for any penguin that has a name!

### #2
Call `sayHello` for different penguins. 

### #3 
Now use an array to store these `Penguin` objects and iterate over them to `sayHello`.

### #4 
Modify your `Penguin` objects to add a `canFly` property that tells you if a penguin can fly or not.

### #5 
Now add a `canFly` method to your `Penguin` and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's `canFly` property is true, or "No flying for me!" if its `canFly` property is false. *Note:* Try to do this without modifying the original object (check the docs section on *Working with objects*).

# #4

Write a JavaScript function to find the longest string from an given array of strings. 

# #5
Write a JavaScript function to remove all characters from a given string that appear more than once.

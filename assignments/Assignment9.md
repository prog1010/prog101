### #1

Cuz every webpage needs an "About" section.

Start with this HTML and save it as "aboutme.html":

```javascript
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>About Me</title>
</head>
<body>
  <h1>About Me</h1>
  
  <ul>
    <li>Name: <span id="nickname"></span>
    <li>Hometown: <span id="hometown"></span>	
    <li>What do I like most in this : <span id="favorites"></span>
   </ul>
  
 </body>
</html>
```
  
Add a script tag to the bottom.
Change the body style so it has a font-family of "Arial, sans-serif".
Replace each of the spans (nickname, favorites, hometown) with your own information.
Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
Create a new img element and set its src attribute to a picture of you. Append that element to the page.


### #2

Keep track of which books you read and which books you want to read!

Create a webpage with an h1 of "My Book List".
Add a script tag to the bottom of the page, where all your JS will go.
Copy the array of books from the Assignment 5 (exercise 6).
Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
*Bonus*: Use a ul and li to display the books.
*Bonus*: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
*Bonus*: Change the style of the book depending on whether you have read it or not.

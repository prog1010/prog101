## The recipe manager

A chef (Hans) with a hectic schedule has trouble remembering ingredients for his recipes. He wants to be able
to store them in JavaScript objects and, at times, print them out along with some info about the prepared food.

When he's calm, he can easily remember the following information about his recipes:

#### Best Brownies in the world by Hans
Ingredient | Number of units | Calories per 100 units
--- | ---: | ---:
Unsalted butter (g) | 185 | 728
Best dark chocolate (g) | 185 | 598
Dark chocolate soup pots with double cream in spoons | 8 | 3000
Plain flour (g) | 85 | 364
Cocoa powder (g) | 40 | 228
White chocolate (g) | 50 | 500
White chocolate squares, stacked | 8 | 5000
Milk chocolate (g) | 50 | 488
Milk chocolate squares | 8 | 5500
Large eggs | 3 | 143
Golden caster sugar | 275 | 387

Provide a function for him that creates a `recipe` object:
```javascript
var brownies = createRecipe("Best Brownies in the world by Hans");
```

To which he can add the ingredients:
```javascript
brownies.addIngredient("Unsalted butter (g)", 185 , 728);
brownies.addIngredient("Best dark chocolate (g)", 185 , 598);
// ...
brownies.addIngredient("Large eggs", 3 , 7200);
brownies.addIngredient("Golden caster sugar", 275 , 387);
```

When he's finished, he wants to print the recipe for a certain number of servings: (let's say 3). 
```javascript
brownies.printForServings(3);
```
He expects to see something like this:
 ```
Ingredients for Best Brownies in the world by Hans - 3 servings
-
Unsalted butter (g): 555
Best dark chocolate (g): 555
Dark chocolate soup pots with double cream in spoons: 24
Plain flour (g): 255
Cocoa powder (g): 120
White chocolate (g): 150
White chocolate squares, stacked: 24
Milk chocolate (g): 150
Milk chocolate squares: 24
Large eggs: 9
Golden caster sugar: 825
-
Total calories for 3 servings: 17123.85
```

## Implementation guidelines

Copy and paste the following code in your editor and save the file:
```javascript
function createRecipe(title) {
    var recipe = {
        // store the recipe title
        name: title,
        // initialize an empty list where we will store the ingredients
        ingredients: [],
        addIngredient: function(name, quantity, calories) {
            // your code here
        },
        printForServings: function(numberOfServings) {
            // your code here
        }
    }
    return recipe;
}

var brownies = createRecipe("Best Brownies in the world by Hans");

brownies.addIngredient("Unsalted butter (g)", 185 , 728);
brownies.addIngredient("Best dark chocolate (g)", 185 , 598);
brownies.addIngredient("Dark chocolate soup pots with double cream in spoons", 8 , 3000);
brownies.addIngredient("Plain flour (g)", 85 , 364);
brownies.addIngredient("Cocoa powder (g)", 40 , 228);
brownies.addIngredient("White chocolate (g)", 50 , 500);
brownies.addIngredient("White chocolate squares, stacked", 8 , 5000);
brownies.addIngredient("Milk chocolate (g)", 50 , 488);
brownies.addIngredient("Milk chocolate squares", 8 , 5500);
brownies.addIngredient("Large eggs", 3 , 7200);
brownies.addIngredient("Golden caster sugar", 275 , 387);

brownies.printForServings(3);
```

When `addIngredient` is called, we have to store the ingredient information (name, quantity and calories) in a position 
inside the `ingredients` property of the `recipe`

`printForServings()` should loop through the ingredients and print their name with the quantity updated for the number of servings.

To calculate the total number of calories we must adjust the caloric value (which is for 100 units) to the number of units we have (*e.g.* for 3 servings of 185g of butter we have a total of 555g which have 728 / 100 * 555 calories)

After running the program, check if the output is similar to what Hans expects.\
Good luck!
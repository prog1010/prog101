function createRecipe(title) {
    var recipe = {
        // store the recipe title
        name: title,
        // initialize an empty list where we will store the ingredients
        ingredients: [],
        addIngredient: function(name, quantity, calories) {
            var incredient = {
                nume : name,
                cantitate: quantity,
                calorii : calories

            }
            this.ingredients.push(incredient)

        },
        printForServings: function(numberOfServings) {
            var sum =0;
            console.log (this.name + " "+numberOfServings + " servings")

            for (var i=0; i < this.ingredients.length; i++){
                console.log (this.ingredients[i].nume + " : " + numberOfServings* this.ingredients[i].cantitate)
                var c = this.ingredients[i].calorii /100 * numberOfServings* this.ingredients[i].cantitate
                sum = sum + c;
                 
            }
          
            console.log ("Total calories for " + numberOfServings + " servings: " + sum )
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
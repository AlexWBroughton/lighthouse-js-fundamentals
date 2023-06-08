const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i<ingredients.length){
	console.log(ingredients[i]);
	i++;
}

//for loop

for (let i=0;i<ingredients.length;i++){
	console.log(ingredients[i]);
}

var reverseIngredients = ingredients.reverse();
console.log(reverseIngredients);

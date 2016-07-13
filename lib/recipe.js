'use strict';

let recipe = {
  name: 'Cookie',
  author: 'Lauren',
  steps: [
    "Measure ingredients",
    "Mix ingredients",
    "Bake at 325 for 15 minutes"
  ],
  servings: 10,
  totalIngredients: 4,
  ingredients: [
    {
      name: 'flour',
      amountUnit: 'cups',
      amountQuantity: 3,
      notes: 'pre-sift for best results',
      inPantry: true
    },
    {
      name: 'chocolate chips',
      amountUnit: 'cups',
      amountQuantity: 1,
      notes: 'milk chocolate',
      inPantry: false
    },
    {
      name: 'sugar',
      amountUnit: 'cups',
      amountQuantity: 2,
      notes: 'granulated',
      inPantry: true
    },
    {
      name: 'butter',
      amountUnit: 'cups',
      amountQuantity: 1,
      notes: 'unsalted',
      inPantry: false
    }
  ],
  printIngredients: function(){
    for (let i = 0; i < this.ingredients.length; i++) {
      let ing = this.ingredients[i];
      console.log(ing.amountQuantity + ' ' + ing.amountUnit + ' of ' + ing.name);
    }
  },
  ingredientsNeeded: function(){
    for (let i = 0; i < this.ingredients.length; i++) {
      let ing = this.ingredients[i];
      if (!ing.inPantry) {
        console.log('You need: '+ ing.name);
      }
    }
  }
};

recipe.printIngredients();

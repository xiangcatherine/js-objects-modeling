'use strict';

// ingredients
const flour = {
  name: 'flour',
  location: 'pantry',
};

const butter = {
  name: 'butter',
  location: 'fridge',
};

const sugar = {
  name: 'sugar',
  location: 'pantry',
};

const egg = {
  name: 'egg',
  location: 'fridge',
};

// ingredient quantities

const butterQuantity = {
  ingredient: butter,
  unitOfMeasure: 'sticks',
  quantity: 1,
  notes: 'softened'
};

const flourQuantity = {
  ingredient: flour,
  unitOfMeasure: 'cups',
  quantity: 2,
  notes: 'sifted'
};

const sugarQuantity = {
  ingredient: sugar,
  unitOfMeasure: 'cups',
  quantity: 1,
};

const eggQuantity = {
  ingredient: egg,
  unitOfMeasure: null,
  quantity: 2,
  notes: 'beaten'
};

//recipe

const recipe = {
  name: 'Sugar Cookies',
  steps: [
    'Cream the butter and sugar together in a mixing bowl',
    'Add the egg',
    'Mix in the flour',
    'Roll out the dough',
    'Cut out cute shapes',
    'Bake on a greased cookie sheet for 10 minutes at 350'
  ],
  ingredients: [
    flourQuantity,
    sugarQuantity,
    eggQuantity,
    butterQuantity,
  ],
  servings: 20,
  author: 'Rachel',
  printIngredients: function () {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      console.log(recipe.ingredients[i].quantity +
        " " + recipe.ingredients[i].unitOfMeasure + " of " +
        recipe.ingredients[i].ingredient.name);
    }
  }
};

module.exports = recipe;

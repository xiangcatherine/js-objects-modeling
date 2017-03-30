const recipe = {
  ingredients: [
    {
      name: 'flour',
      store: false,
      quantity: 4,
      notes: 'coarsely chopped',
      unitMeasure: 'cups',
      numServ: 4
    },
    {
      name: 'butter',
      store: true,
      quantity: 5,
      notes: 'finely chopped',
      unitMeasure: 'teaspoons',
      numServe: 2
    }
  ],
  printRecipe: function () {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      const line = this.ingredients[i].quantity + ' ' +
        this.ingredients[i].unitMeasure + ' of ' + this.ingredients[i].name
      console.log(line)
    }
  }
}

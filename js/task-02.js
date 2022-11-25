const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector('#ingredients');


ingredients.forEach(nameIngredients => {
   const elements = document.createElement("li");
  elements.textContent = `${nameIngredients}`;
  elements.classList.add("item");
  listIngredients.prepend(elements);
});

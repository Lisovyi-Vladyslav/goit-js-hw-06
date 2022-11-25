const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector('#ingredients');


const makeIngredientsList = ingredients.map(ingredient => {
const itemEL = document.createElement('li');
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;
   
    return itemEL;
});

console.log(makeIngredientsList);
listIngredients.append(...makeIngredientsList);

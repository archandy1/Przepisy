// select elements:
import get from './getElement.js';

// API URL
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchRecipes = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const showRecipe = async (url) => {
  // fetch recipies
  const data = await fetchRecipes(url);

  // display recipies
  const section = await displayRecipies(data);
  // console.log(section);
};

showRecipe(url);

//  create meal category, then buttons
let recipeCategory = [];

const displayRecipies = ({ meals }) => {
  const section = get('.recipe-grid');
  const title = get('.section-title');
  if (!meals) {
    title.textContent = 'sorry, no meals';
    section.innerHTML = null;
    return;
  }
  const newMeals = meals
    .map((meal) => {
      // console.log(meal);
      const {
        idMeal: id,
        strCategory: category,
        strMeal: name,
        strMealThumb: image,
      } = meal;

      // push category to empty array !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      recipeCategory.push(category);
      // const recipeCategory = meal.strCategory;
      return `<a href="./przepisy.html" class="recipe" data-id="${id}">
          <img
            class="${name}"
            src="${image}"
            alt="${name}"
            title="${name}"
          />
          <div class="recipe-info">
            <h3 class="title">${name}</h3>
            <p>Recipe details:</p>
          </div>
        </a>`;
    })
    .join('');
  title.textContent = 'Recipes loaded...';
  section.innerHTML = newMeals;
  return section;
};
// get unique values and create buttons
function printBtn() {
  const unique = ['all', ...new Set(recipeCategory)];
  return unique;
}
console.log(printBtn(recipeCategory));

//  check if category works
// console.log(recipeCategory);
// console.log(recipeCategory[0]);

// create function that takes category of meal and turns it into button

// function getUniqueArray(_array) {
//   var obj = {};
//   var uniqueArray = [];
//   for (var i = 0; i < _array.length; i++) {
//     if (obj[_array[i]] == undefined) {
//       // add the array elements to object , where the element is key and the same element is value
//       // keys of the object can only have unique values
//       obj[_array[i]] = i;
//       // add the keys of the object to a new array as elements of the array
//       uniqueArray.push(_array[i]);
//     }
//   }
//   return uniqueArray;
// }

// //  get data form URL as JSON
// const fetchRecipies = async (url) => {
//   const response = await fetch(url);
//   if (!response.ok) throw new Error(response.statusText);
//   // if everything is OK return json
//   // return promise and convert to json
//   const data = response.json();
//   return data;
// };

// // invoke get JSON function
// fetchRecipies(url)
//   .then((data) => {
//     // console.log(data);
//     //
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const displayRecipies = (recipe) => {
//   const displayData = recipe.
// }

//  now destructure data

// const displayData = () => {
//   const displayData = items.map((meals) => {
//     const {strMeal} = item;
//   })
// }

//  and then display it....

//  and then create filters...buttons, maybe search

//  and create single recipe sitlo

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
const recipeCategory = '';

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

      const recipeCategory = meal.strCategory;
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

// console.log(recipeCategory);

/*
const displayButtons = ({ meals }) => {
  const containerBtns = get('.container-btns');
  const filterBtns = get('.filter-btn');

  const newButtons = meals.map((meal) => {
    const { idMeal: id, strCategory: category } = meal;
    return category;
  });
};

displayButtons();
console.log(category);
*/

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

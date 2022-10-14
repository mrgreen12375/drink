var cocktailRandom = document.querySelector('#cocktailRandom');

function searchRandom(event){
    event.preventDefault();
    cocktail = cocktailName.value.trim();
    
    getRandomCocktailInfo()
}
//setup function to clear prior cocktail search
function clearPriorSearch(){
    ingredients.innerHTML = '';
}
//setup funtion to fetch cocktial API information, clear prior search, and display current cocktail information
function getRandomCocktailInfo() {

    var cocktailInfo = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  
    fetch(cocktailInfo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        clearPriorSearch()
        displayRandomCocktail(data);
    });
}
//setup function to create elements for the API data parameters used with a for loop and if statement for the measurements/ingredients
function displayRandomCocktail(display) {
    console.log(display.drinks[0]);

    var ingredients = document.querySelector('#ingredients');

    var drinkName = document.createElement('h2');
    drinkName.innerHTML = display.drinks[0].strDrink;

    var img = document.createElement('img');
    img.src = display.drinks[0].strDrinkThumb;

    ingredients.appendChild(drinkName);
    ingredients.appendChild(img);

    var instructionInfo = document.createElement('p');
    instructionInfo.innerHTML = display.drinks[0].strInstructions;
        
    ingredients.appendChild(instructionInfo);

    for (var i = 1; i < 16; i++) {
        console.log(i); 

        if (display.drinks[0][`strIngredient${i}`] == null){
            return;
        } else if (display.drinks[0][`strMeasure${i}`] == null){
            return;
        }

        var ingredientLs = document.createElement('li');
        ingredientLs.innerHTML = display.drinks[0][`strMeasure${i}`] + ' : ' + display.drinks[0][`strIngredient${i}`];
       
        ingredients.appendChild(ingredientLs);
    }
}
//setup event listener for search button
cocktailRandom.addEventListener('click', searchRandom);
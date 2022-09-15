var cocktailName = document.querySelector('#cocktailName')
var cocktailButton = document.querySelector('#cocktailButton')

function searchButton(event){
    event.preventDefault();
    cocktail = cocktailName.value.trim();
    if(cocktail == ''){
        window.alert('please enter cocktail name');
        return
    } 
    getCocktailInfo()
}

function clearPriorSearch(){
    ingredients.innerHTML = '';
}

function getCocktailInfo() {

    var cocktailInfo = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;
  
    fetch(cocktailInfo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        clearPriorSearch()
        displayCocktail(data);
    });
}

function displayCocktail(display) {
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

cocktailButton.addEventListener('click', searchButton);
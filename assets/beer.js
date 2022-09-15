var drinkInput = document.getElementById('beerName');
var searchBtn = document.getElementById('beerButton');
var prompt = document.getElementById('modal');
var promptTxt = document.getElementById('promptTxt');
var exitPrompt = document.getElementById('close');
var square = document.getElementsByClassName('beerSquare');
var desc = document.getElementsByClassName('desc');

var A = 0;

searchBtn.addEventListener('click', searchBeer)

function searchBeer(event) {
    event.preventDefault();
var beerName = drinkInput.value;
fetch('https://api.punkapi.com/v2/beers?beer_name=' + beerName)
    .then(function(response) {
        console.log(response)
        if (!response.ok) {
            prompt.style.display = 'block';
            promptTxt.textContent = "We couldn't find a drink by that name. Try again!";
            exitPrompt.addEventListener('click', function() {
                prompt.style.display = 'none';
            })
        }
        return response.json();
    })
    .then(function(beerData) {
        console.log(beerData)
        //if search has multiple options return a list of results and choose one to search
        if (beerData.length > 1) {
            prompt.style.display = 'block';
            promptTxt.textContent = 'There are multiple results with that name, did you mean...'
            var promptList = document.createElement('ol');
            promptTxt.append(promptList);
            for (let i = 0; i < beerData.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = beerData[i].name;
                promptList.append(listItem)
                listItem.style.cursor = 'pointer'
                listItem.onclick = function() {
                drinkInput.value = beerData[i].name
                prompt.style.display = 'none';
                searchBeer();
                }
            }
            exitPrompt.addEventListener('click', function() {
                prompt.style.display = 'none';
            })                
        } else {
            //lists all ingredients and amounts for each
            const drinkName = beerData[0].name;
            const {ingredients} = beerData[0];
            var hopsList = [];
            var maltList = [];
            for (let i = 0; i < ingredients.hops.length; i++) {
                var hopAmount = ingredients.hops[i].amount.value + ' ' + ingredients.hops[i].amount.unit;
                hopsList.push(' ' + hopAmount +': ' + ingredients.hops[i].name)
            }
            for (let i = 0; i < ingredients.malt.length; i++) {
                var maltAmount = ingredients.malt[i].amount.value + ' ' + ingredients.malt[i].amount.unit;
                maltList.push(' ' + maltAmount +': ' + ingredients.malt[i].name)
            }
            square[A].style.display = 'flex'
            square[A].children[0].textContent = drinkName 
            square[A].children[1].src = beerData[0].image_url
            square[A].children[2].textContent = beerData[0].description
            square[A].children[3].textContent = 'Hops: ' + hopsList.toString()
            square[A].children[4].textContent = 'Malt: ' + maltList.toString()
            square[A].children[5].textContent = 'ABV: ' + beerData[0].abv + '%'
            drinkInput.value = '';
        }
        console.log(beerData)
        console.log(beerData[0].ingredients)
    }) 
}





var drinkInput = document.getElementById('beerName');
var searchBtn = document.getElementById('beerButton');
var prompt = document.getElementById('modal');
var promptTxt = document.getElementById('promptTxt');
var exitPrompt = document.getElementById('close');
var square = document.getElementsByClassName('beerSquare');
var desc = document.getElementsByClassName('desc');

var A = 0;

searchBtn.addEventListener('click', searchBeer)

function searchBeer() {
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
        if (beerData.length > 1) {
            prompt.style.display = 'block';
            promptTxt.textContent = 'There are multiple results with that name, did you mean...'
            //should list all results related to inital search string, click on item and send that result to api
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
                }
            }
            exitPrompt.addEventListener('click', function() {
                prompt.style.display = 'none';
            })                
        } else {
            //needs to list all ingredients and amounts for each
            const drinkName = beerData[0].name + ': ';
            const {ingredients} = beerData[0];
            var hopsList = [];
            var maltList = [];
            for (let i = 0; i < ingredients.hops.length; i++) {
                hopsList.push(' ' + ingredients.hops[i].name)
            }
            for (let i = 0; i < ingredients.malt.length; i++) {
                maltList.push(' ' + ingredients.malt[i].name)
            }
            square[A].style.display = 'block'
            square[A].children[0].textContent = drinkName 
            square[A].children[1].src = beerData[0].img_url
            square[A].children[2].textContent = beerData[0].description
            square[A].children[3].textContent = 'Hops: ' + hopsList.toString()
            square[A].children[4].textContent = 'Malt: ' + maltList.toString()
            square[A].children[5].textContent = 'ABV: ' + beerData[0].abv + '%'
            A++;
            drinkInput.value = '';
        }
        console.log(beerData)
        console.log(beerData[0].ingredients)
    }) 
}


/*
$(function() {
    fetch('https://api.punkapi.com/v2/beers?page=5&per_page=80')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var availableTags = [];
        for (let i = 0; i < data.length; i++) {
            availableTags.push(data[i].name)
                $( "#beerName" ).autocomplete({
                source: availableTags
            });
        }

    });
})*/


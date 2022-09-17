
var listLength=document.getElementById("drinks").childElementCount


function createFavoriteList() {
    var i=localStorage.length;
    var saveHistory=document.createElement("li");
    var drink=document.getElementById("drinksSaved").value;
    saveHistory.classList.add("listLook");
    localStorage.setItem(i, drink);
    saveHistory.innerHTML=drink;
    document.getElementById("drinks").appendChild(saveHistory);
    i=i+1
    listLength=listLength
    console.log(drink)
    console.log(listLength)
}

function init () {
    for (var i=0; i<localStorage.length; i++) {
        var getSavedHistory = localStorage.getItem(i);
        console.log(getSavedHistory);
            if (getSavedHistory !== null) {
                var savedHistory = document.createElement("li");
                savedHistory.classList.add("listLook");
                savedHistory.innerHTML =getSavedHistory;
                document.getElementById("drinks").appendChild(savedHistory);
                } 
    }
}

init ();
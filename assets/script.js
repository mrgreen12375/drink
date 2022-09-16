var i=0
function createFavoriteList() {
    var drink=document.getElementById("drinkSaved");
    var saveHistory=document.createElement("li");
    saveHistory.classList.add("listStyle");
    localStorage.setItem("drink"+i, drink.value);
    saveHistory.innerHTML=drink.value;
    document.getElementById("drinks").appendChild(saveHistory);
    i=i+1
}

function init () {
    for ( let i=0; i<= ; i++) {

    }
}

init ()
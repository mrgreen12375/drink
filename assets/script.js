var i=0
function createFavoriteList() {
    var drink=document.getElementById("drinkSaved");
    var saveHistory=document.createElement("li");
    saveHistory.classList.add("listStyle");
    localStorage.setItem("drink"+i, drink.value)
    i=i+1
}
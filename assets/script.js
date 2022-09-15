var i=0
function createFavoriteList() {
    var drink=document.getElementById("drinksSaved");
    localStorage.setItem("drink"+i, drink.value)
    i=i+1
}
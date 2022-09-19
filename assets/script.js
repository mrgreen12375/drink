
var listLength=document.getElementById("drinks").childElementCount

function createFavoriteList() {
    var i=localStorage.length;
    var saveHistory=document.createElement("li");
    saveHistory.setAttribute("id", "drink"+i);
    var drink=document.getElementById("drinksSaved").value;
    saveHistory.classList.add("listLook");
    localStorage.setItem(i, drink);
    saveHistory.innerHTML=drink;
    document.getElementById("drinks").appendChild(saveHistory);

    var clearEntry=document.createElement("button");
    clearEntry.setAttribute("onclick","clearFromLocal ("+i+")");
    clearEntry.setAttribute("id", "clear"+i);
    clearEntry.setAttribute("type", "button");
    clearEntry.classList.add("clearButton");
    document.getElementById("drink"+i).appendChild(clearEntry);
    
    
    var clearEntryText=document.createElement("span");
    clearEntryText.innerHTML="&times;"
    document.getElementById("clear"+i).appendChild(clearEntryText);
}

function clearFromLocal (i) {
    var drinkEl=document.getElementById("drink"+i);
    drinkEl.remove();
    localStorage.removeItem(i);
}

function init () {
    for (var i=0; i<10; i++) {
        var getSavedHistory = localStorage.getItem(i);
            if (getSavedHistory !== null) {
                var savedHistory = document.createElement("li");
                savedHistory.setAttribute("id", "drink"+i);
                savedHistory.classList.add("listLook");
                savedHistory.innerHTML =getSavedHistory;
                document.getElementById("drinks").appendChild(savedHistory);
                var clearEntry=document.createElement("button");
                clearEntry.setAttribute("onclick","clearFromLocal ("+i+")");
                clearEntry.setAttribute("id", "clear"+i);
                clearEntry.setAttribute("type", "button");
                clearEntry.classList.add("clearButton");
                document.getElementById("drink"+i).appendChild(clearEntry);
                var clearEntryText=document.createElement("span");
                clearEntryText.innerHTML="&times;"
                document.getElementById("clear"+i).appendChild(clearEntryText);
                } 
    }
}

init ();

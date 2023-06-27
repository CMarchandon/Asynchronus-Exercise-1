 // Function for displaying the list
 function afficherListe(list) {
    var ul = document.getElementById("myList");
    list.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Function for displaying on click
function handleClick() {
    // Lire le fichier JSON
    fetch('becode.json')
        .then(response => response.json())
        .then(data => afficherListe(data))
        .catch(error => console.log(error));
}

// Event for the click
var myButton = document.getElementById("myButton");
myButton.addEventListener("click", handleClick);

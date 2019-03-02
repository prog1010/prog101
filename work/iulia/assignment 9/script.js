
document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").innerText = "Fifi";
document.getElementById("hometown").innerText = "City of Emerald";
document.getElementById("favorites").innerText = "The yellow brick Road";

document.querySelectorAll("li").forEach(function(li) {
    li.className = "listitem" ;
});



var fifi = document.createElement("img");
fifi.setAttribute('src', 'https://vignette.wikia.nocookie.net/villains/images/0/0c/The_Wicked_Witch_of_the_West.jpg/revision/latest?cb=20150824060132');
document.body.appendChild(fifi);
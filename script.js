let title = document.getElementById("title");
let name = prompt("Yo!, what's your name")
alert("Welcome " + name + " to the best gaming website,")
alert("...GAMEVERSE!!!")
const playButton = document.getElementById("button");
button.addEventListener("click", function (){
    button.textContent = "Loading...";
    setTimeout(function (){
        window.location.href = "playable.html";
    }, 1500);
});

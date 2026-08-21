let title = document.getElementById("title");
let name = prompt("Yo!, what's your name")
alert("Welcome " + name + " to the best gaming website,")
alert("...GAMEVERSE!!!")
const playButton = document.getElementById("button");
playButton.addEventListener("click", function (){
    playButton.textContent = "Loading...";
    setTimeout(function (){
        window.location.href = "Playable.html";
    }, 1500);
});

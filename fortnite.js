const button = document.getElementById("button")
button.addEventListener("click", function (){
    button.textContent = "Loading...";
    setTimeout(function (){
        window.location.href = "Gameverse Fortnite.html";
    }, 2000);
});
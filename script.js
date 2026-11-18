const aboutButton = document.getElementById("aboutButton");

aboutButton.addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});
var button = document.querySelector(".button");
var body = document.querySelector("body");
var count = 0;
var text = document.querySelector(".text");
var hello = document.querySelector(".hello");
var card = document.querySelector(".card");
button.addEventListener("click", function() {
    if (count == 0) {
        body.style.backgroundColor = "#C7C4C3";
          card.style.backgroundColor = "white";
        button.innerHTML = "☀️";
        text.style.color = "black";
        hello.style.color = "black";

        count = 1;

}
else{
        button.innerHTML = "🌙";
        body.style.backgroundColor = "#151018";
        card.style.backgroundColor = "#0c080e";
        text.style.color="white";
        hello.style.color="white";
        count = 0;
}
});
let quotes = [
    "Every artist was first an amateur.",

    "A rose by any other name would smell as sweet.",

    "All that glitters is not gold.",

    "All the world’s a stage, and all the men and women merely players.",

    "Ask not what your country can do for you; ask what you can do for your country",

    "Ask, and it shall be given you; seek, and you shall find.",

    "Eighty percent of success is showing up.",
    
    "For those to whom much is given, much is required.",

    "Frankly, my dear, I don't give a damn.",

    "Genius is one percent inspiration and ninety-nine percent perspiration.",

    "Go ahead, make my day.",

    "He travels the fastest who travels alone.",

    "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",

    "I think therefore I am.",

    "If you build it, they will come."


];

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random];   
});
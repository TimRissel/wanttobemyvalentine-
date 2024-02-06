let noCount = 0;
let noButton = document.getElementById("noBtn");
let responseIndex = 0;

function changeResponse() {
    if (noCount < 5 && noCount < funnyResponses.length) {
        noButton.textContent = funnyResponses[responseIndex];
        responseIndex = (responseIndex + 1) % funnyResponses.length;
        noCount++;
    } else if (noCount === 5) {
        document.body.style.backgroundImage = "url('sad_teddy.gif')"; // GIF of sad teddy
        document.getElementById("response").innerHTML = "Uh-oh, you've made the teddy sad!";
        document.querySelector('.container').style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        noButton.style.display = "none"; // Hide the "No" button after the teddy appears
        document.getElementById("response").style.display = "none"; // Hide the response text
        noCount++;
    } else {
        document.getElementById("response").innerHTML = "Are you sure?";
    }
}

function showHearts() {
    document.body.style.backgroundImage = "url('love_teddy.gif')"; // GIF of love teddy
    document.getElementById("response").innerHTML = "<h1>19:00 Uhr Gio Ristorante</h1><h1>I love you</h1>";
    document.querySelector('.container').style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
}

const funnyResponses = [
    "Nope, try again!",
    "Still nope!",
    "Are you kidding me?",
    "Not happening!",
    "You're persistent!",
    "Last chance!",
    "Seriously?",
    "Really?",
    "Alright, fine!",
    "Oh, you finally gave in!",
    // Add more funny responses here as needed
];

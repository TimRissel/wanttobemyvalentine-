let noCount = 0;

function changeResponse() {
    let noButton = document.getElementById("noBtn");
    if (noCount < 5) {
        switch (noCount) {
            case 0:
                noButton.textContent = "Are you sure?";
                break;
            case 1:
                noButton.textContent = "Think about it!";
                break;
            case 2:
                noButton.textContent = "Maybe reconsider?";
                break;
            case 3:
                noButton.textContent = "Last chance!";
                break;
            case 4:
                noButton.textContent = "Are you really sure?";
                break;
            default:
                break;
        }
        noCount++;
    } else {
        document.body.style.backgroundImage = "url('sad_teddy.jpg')"; // Change background to sad_teddy
        noButton.style.display = "none"; // Hide the "No" button after the teddy appears
    }
}

function showInvitation() {
    document.body.style.backgroundImage = "url('love_teddy.jpg')"; // Change background to love_teddy
    document.querySelector('.container').innerHTML = "<h1>20:00 Uhr Gio Ristorante</h1>";
    document.getElementById("response").innerHTML = "<h1>I love you</h1>";
}

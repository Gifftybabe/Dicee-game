const randomNumber1 = Math.trunc(Math.random() * 6) + 1; // 1-6

const randomImages = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

const randomImagesSource = "images/" + randomImages; // images/dice1.pmg - images/dice6.pmg

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesSource);

const randomNumber2 = Math.trunc(Math.random() * 6) + 1;

const randomImages2 = "images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!!! 🎌";

}



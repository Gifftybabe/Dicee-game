function rollDice() {
  const randomNumber1 = Math.trunc(Math.random() * 6) + 1; // 1-6
  const randomImages = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
  const randomImagesSource = "images/" + randomImages; // images/dice1.png - images/dice6.png

  let image1 = document.querySelector(".img1");
  image1.setAttribute("src", randomImagesSource);

  const randomNumber2 = Math.trunc(Math.random() * 6) + 1;
  const randomImages2 = "images/dice" + randomNumber2 + ".png";

  let image2 = document.querySelector(".img2");
  image2.setAttribute("src", randomImages2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "It's a Draw!!! 🎌";
  }
}

window.addEventListener("load", function () {
  if (performance.navigation.type === 1) {
    // Page is refreshed
    rollDice();
  }
});

document.querySelector("h1").addEventListener("click", rollDice);

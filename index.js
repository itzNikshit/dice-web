function random_generator() {
  var no1 = Math.ceil((Math.random() * 6));
  var no2 = Math.ceil((Math.random() * 6));
  document.querySelector(".img1").setAttribute("src","images/dice" + no1 + ".png");
  document.querySelector(".img2").setAttribute("src","images/dice" + no2 + ".png");
  if(no2 > no1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else if(no1 > no2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "It's a tie";
  }
}
window.onload = random_generator();

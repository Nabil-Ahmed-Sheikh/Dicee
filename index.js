var p1 = Math.ceil(Math.random()*5);

var p2 = Math.ceil(Math.random()*5);

var im1 = "images/dice"+p1+".png";
var im2 = "images/dice"+p2+".png";

document.querySelector(".img1").setAttribute("src",im1);
document.querySelector(".img2").setAttribute("src",im2);

if(p1>p2){
  document.querySelector("h1").textContent = "🚩 Player 1 wins";
}
else if (p1<p2) {
  document.querySelector("h1").textContent = "🚩 Player 2 wins";
}
else{
  document.querySelector("h1").textContent = "🏳️ Draw 🏳️";
}

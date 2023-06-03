var r1 = Math.floor(Math.random()*6) + 1;
var r2 = Math.floor(Math.random()*6) + 1;
var rimg1 = "dice" + r1 + ".png";
var rimgsrc1 = "images/" + rimg1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",rimgsrc1);
var rimg2 = "dice" + r2 + ".png";
var rimgsrc2 = "images/" + rimg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",rimgsrc2);

if (r1 > r2) {
    document.querySelector("h1").innerHTML="🎉Player 1 wins🚩"
} else if (r1 < r2) {
    document.querySelector("h1").innerHTML="🎉Player 2 wins🚩"
} else {
    document.querySelector("h1").innerHTML="Draw"
}
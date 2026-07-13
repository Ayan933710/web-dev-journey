/*//selcting elements of html in js

let smallimages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallimages.length; i++) {
  smallimages[i].src = "assets/spiderman_img.png";
  console.log(`value of img no. ${i} is changed.`);
}

//selecting elements of css in js

console.dir(document.querySelector("h1"));

//selecting all the elements of a particular element of css in js

console.dir(document.querySelectorAll("h1"));

//inline styling manipulating

let links = document.querySelectorAll(".box a");

for (link of links) {
  link.style.color = "purple";
}

// practice question of lecture 9

let newinput = document.createElement("input");
let newbutton = document.createElement("button");
newbutton.innerText = "Click Me";
document.querySelector("body").append(newinput);
document.querySelector("body").append(newbutton);

newinput.placeholder = "username";
newbutton.setAttribute("id", "btn");

let newbtn = document.getElementById("btn");
newbtn.classList.add("btn");

let hdng = document.createElement("h1");
hdng.innerText = "DOM Practice";
document.querySelector("body").append(hdng);

let par = document.createElement("p");
par.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(par);
*/

//first mini game
/*
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let box = document.querySelector("div");
  let randomcolor = getRandomColor();
  h3.innerText = randomcolor;
  box.style.backgroundColor = randomcolor;
});

function getRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}
*/

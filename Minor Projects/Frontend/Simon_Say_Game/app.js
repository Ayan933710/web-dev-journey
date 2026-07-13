let gameSeq = [];
let userseq = [];
let randcol = ["red", "blue", "pink", "darkblue"];

let level = 0;
let started = false;
let maxscore = 0;

let h2 = document.querySelector("h2");
let btn = document.querySelectorAll("buton");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("Game has started");
    levelup();
  }
});

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randidx = Math.floor(Math.random() * 3);
  let random = randcol[randidx];
  let ranbtn = document.querySelector(`.${random}`);
  gameSeq.push(random);
  console.log(gameSeq);
  btnflash(ranbtn);
}

function btnflash(btns) {
  btns.classList.add("flash");
  setTimeout(function () {
    btns.classList.remove("flash");
  }, 250);
}

function check(idx) {
  if (gameSeq[idx] == userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    if (level > maxscore) {
      maxscore = level;
    }
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br /> Max Score = <b>${maxscore}</b> <br /> Press any key to start again.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function userbtn() {
  let btn = this;
  btnflash(btn);

  let usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);

  check(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", userbtn);
}

function reset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}

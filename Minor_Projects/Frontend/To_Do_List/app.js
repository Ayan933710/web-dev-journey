let btn = document.querySelector("button");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
  let task = document.createElement("li");
  let delbtn = document.createElement("button");
  let ul = document.querySelector("ul");

  task.innerText = input.value;
  delbtn.innerText = "Delete";
  delbtn.classList.add("delete");

  ul.appendChild(task);
  task.appendChild(delbtn);

  input.value = " ";
});

let ul = document.querySelector("ul");

ul.addEventListener("click", function (event) {
  let del = event.target.parentElement;
  del.remove();
});

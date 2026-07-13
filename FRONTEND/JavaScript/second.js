// call stack
// Go to Sources in inspect for debugging and seeing call stack
/*
function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();
*/
// callback hell (nested functions)
/*
function savetoDb(data, success, failure) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  if (internetspeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "Apna College",
  () => {
    console.log("success : your data was saved");
    savetoDb(
      "Hello World",
      () => {
        console.log("success2 : your data was saved");
        savetoDb(
          "Narayan Shaw",
          () => {
            console.log("success3 : your data was saved");
          },
          () => {
            console.log("failure3 : weak connection");
          },
        );
      },
      () => {
        console.log("failure2 : weak connection");
      },
    );
  },
  () => {
    console.log("failure : weak connection");
  },
);
*/
// Solution to Callback Hell : Promise Object
/*
function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
      resolve("success : data was stored");
    } else {
      reject("failure : weak connection");
    }
  });
}

savetoDb("Apna College")
  .then((result) => {
    console.log("data 1 saved");
    console.log("result of promise : ", result);
    return savetoDb("hello world");
  })
  .then((result) => {
    console.log("data 2 saved");
    console.log("result of promise : ", result);
    return savetoDb("Narayan Shaw");
  })
  .then((result) => {
    console.log("data 3 saved");
    console.log("result of promise : ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise : ", error);
  });
*/

// async & await function
/*
h1 = document.querySelector("h1");

function changecolor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  await changecolor("red", 1000);
  await changecolor("blue", 1000);
  await changecolor("green", 1000);
  await changecolor("orange", 1000);
  await changecolor("purple", 1000);
  changecolor("yellow", 1000);
}
*/

// handling rejections in async & await
// agar function call karte samay koi error aa jaye to jo code independent hai wo bhi nhi chalega
// so we use try & catch taaki error aane par bhi independent functions easily chale
/*
async function demo() {
  try {
  await changecolor("red", 1000);
  await changecolor("blue", 1000);
  await changecolor("green", 1000);
  await changecolor("orange", 1000);
  await changecolor("purple", 1000);
  changecolor("yellow", 1000);
  }
  catch(err) {
    console.log("error was caught");
    console.log("error is :", err);
  }

  let a = 5;
  console.log("new number is = ", a+4);
}
*/

// API response in JSON format
/*
let jsonres =
  '{"message":"https:\/\/images.dog.ceo\/breeds\/sheepdog-shetland\/n02105855_17401.jpg","status":"success"}';

let validres = JSON.parse(jsonres);

console.log("valid response is : ", validres);
*/

// First API request in JS
/*
let url = "https://catfact.ninja/fact";

fetch(url)
  .then((response) => {
    console.log("response is : ", response);
    return response.json();
  })
  .then((data) => {
    console.log("data is : ", data);
    return fetch(url);
  })
  .then((response2) => {
    console.log("response2 is : ", response2);
    return response2.json();
  })
  .then((data2) => {
    console.log("data2 is : ", data2);
  })
  .catch((error) => {
    ``;
    console.log("error is : ", error);
  });

// same API request using async & await

async function getFacts() {
  try {
    let res1 = await fetch(url);
    let data1 = await res1.json();
    console.log("data1 is : ", data1.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log("data2 is : ", data2.fact);
  } catch (err) {
    console.log("error is : ", err);
  }
}
*/

// dog pictures API
/*
let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
let img = document.querySelector("#dog-image");

btn.addEventListener("click", async () => {
  let dogImageUrl = await getDogImage();
  img.src = dogImageUrl;
});

async function getDogImage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (error) {
    console.error("Error fetching dog image:", error);
    return null;
  }
}
*/
// sending headers in API request though axios
/*
const url = "https://icanhazdadjoke.com/";

async function getJoke() {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    let res = await axios.get(url, config);
    console.log("joke is : ", res.data.joke);
  } catch (error) {
    console.log("Error fetching joke:", error);
  }
}
*/

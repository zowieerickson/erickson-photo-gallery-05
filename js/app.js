// import baguetteBox from "baguettebox.js";
baguetteBox.run(".gallery");
const input = document.getElementById("search");
const filter = input.value.toUpperCase();
const ul = document.getElementsByClassName("gallery");
const li = document.getElementsByClassName("item");

let imgCaption = document.getElementsByTagName("a")[0];
imgCaption.getAttribute("data-caption");

// console.log(imgCaption);

input.addEventListener("keyup", lowerInput);

function lowerInput() {
  input.value = input.value.toLowerCase();
  console.log(input.value);
}

function filterImages() {
  for (i = 0; i < 12; i++) {
    imgCaption = document
      .getElementsByTagName("a")
      [i].getAttribute("data-caption");
    imgCaption = imgCaption.toLowerCase();
    // console.log(imgCaption);
  }

  // BUG I'm having trouble here
  if (input.value.includes(imgCaption)) {
    console.log(imgCaption);
  }
}

/*

input.addEventListener("keyup", lowerInput);

function lowerInput() {
  input.value = input.value.toLowerCase();
  console.log(input.value);
  if (input.value.includes(imgCaption)) {
    console.log(imgCaption);
  }
}
*/

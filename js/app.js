// import baguetteBox from "baguettebox.js";

// Variables
baguetteBox.run(".gallery");
const input = document.getElementById("search");
const filter = input.value.toUpperCase();
const ul = document.getElementsByClassName("gallery");
const li = document.getElementsByClassName("item");
const thumbnails = document.getElementsByTagName("img");
const gallery = document.getElementsByClassName("gallery");

// Event Listeners
input.addEventListener("keyup", filterImages);
input.addEventListener("keyup", lowerInput);

function lowerInput() {
  input.value = input.value.toLowerCase();
}

function filterImages() {
  for (i = 0; i < 12; i++) {
    let imgCaption = document
      .getElementsByTagName("a")
      [i].getAttribute("data-caption");
    imgCaption = imgCaption.toLowerCase();
    if (imgCaption.includes(input.value)) {
      thumbnails[i].parentNode.style.display = "inline";
    } else {
      thumbnails[i].parentNode.style.display = "none";
    }
  }
}

/*
 if (input.value.includes(imgCaption)) {
    console.log(imgCaption);
  }


input.addEventListener("keyup", lowerInput);

function lowerInput() {
  input.value = input.value.toLowerCase();
  console.log(input.value);
  if (input.value.includes(imgCaption)) {
    console.log(imgCaption);
  }
}
*/

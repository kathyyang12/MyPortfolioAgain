"use strict";

let divElement = document.querySelector("#entry");

divElement.addEventListener("click", function (event)
{
  document.querySelector("#aboutme").click(); 
});

let imgElement = document.getElementById("image");

imgElement.src = "./assets/images/snaps/snap-" + getRandomNumber() + ".jpg";
"use strict";

init();

function init()
{
  let imageElements = document.querySelectorAll("img");
  const fullClassName = "full";

  imageElements.forEach((value, index) =>
  {
    if (!value.classList.contains(fullClassName))
    {
      return;
    }

    value.addEventListener("click", showFullImage);
  });
}

function showFullImage()
{
  let src = this.src;
  window.open(src);
}

function getRandomNumber()
{
  const LOW = 1;
  const HIGH = 15;

  let randomNumber = (Math.random() * HIGH) + LOW;
  let floorValue = Math.floor(randomNumber);
  return floorValue;
}
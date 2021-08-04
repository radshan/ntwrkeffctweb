"use strict";

const divMain = document.getElementById("div-main");

document.body.onload = function () {
  const newDiv = document.createElement("div");
  const newImg = document.createElement("img");
  const bgDiv = document.createElement("div");
  const afterBgDiv = document.createElement("div");

  newDiv.className = "link-card";
  newImg.className = "link-img";
  newImg.src = "gradient-lovely.jpeg";
  bgDiv.className = "link-bg";
  afterBgDiv.className = "h-full relative p-4";

  divMain.appendChild(newDiv);
  newDiv.appendChild(newImg);
  newDiv.appendChild(bgDiv);
  newDiv.appendChild(afterBgDiv);
};

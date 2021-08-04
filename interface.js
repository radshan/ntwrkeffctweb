"use strict";

const divMain = document.getElementById("div-main");

document.body.onload = function () {
  const newDiv = document.createElement("div");
  const newImg = document.createElement("img");
  const bgDiv = document.createElement("div");
  const afterBgDiv = document.createElement("div");
  const anchorTag = document.createElement("a");
  const para = document.createElement("p");
  const anchorTagText = document.createTextNode("Link");
  const paraText = document.createTextNode(
    "Hello! This is a description of the link"
  );

  newDiv.className = "link-card";

  // Background image properties
  newImg.className = "link-img";
  newImg.src = "gradient-lovely.jpeg";

  // Background div properties (acts as overlay to image)
  bgDiv.className = "link-bg";

  // Div that holds the link + description
  afterBgDiv.className = "h-full relative p-4";

  // Anchor tag properties
  anchorTag.className = "text-white font-bold";
  anchorTag.target = "_blank";
  anchorTag.href = "https://google.co.in/";

  // Paragraph properties
  para.className = "text-white mt-2";

  divMain.appendChild(newDiv);
  newDiv.appendChild(newImg);
  newDiv.appendChild(bgDiv);
  newDiv.appendChild(afterBgDiv);

  afterBgDiv.appendChild(anchorTag);
  anchorTag.appendChild(anchorTagText);

  afterBgDiv.appendChild(para);
  para.appendChild(paraText);
};

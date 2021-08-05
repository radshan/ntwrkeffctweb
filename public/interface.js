"use strict";

// Data
const links = {
  link1: {
    linkName: "1729.com",
    linkURL: "https://1729.com/",
    linkDesc:
      "Crypto newsletter that pays you for completing tasks. Created by Balaji Srinivasan.",
  },

  link2: {
    linkName: "Lars Blackmore's Personal Blog",
    linkURL: "http://larsblackmore.com/",
    linkDesc:
      "Lars is responsible for entry, descent, and landing of the SpaceX Starship Rocket.",
  },

  link3: {
    linkName: "Musk's exponential view of the world",
    linkURL: "https://www.youtube.com/watch?v=fAaLhEEOVZU",
    linkDesc: "Conversation between Lex Fridman and Grant Sanderson.",
  },

  link4: {
    linkName: "Isaac Asimov on superstition, religion",
    linkURL: "https://youtu.be/HKQQAv5svkk",
    linkDesc: "A YouTube video with his thoughts.",
  },

  link5: {
    linkName: "Neuralink and the brain's future",
    linkURL: "https://waitbutwhy.com/2017/04/neuralink.html",
    linkDesc: "An amazing post by Tim Urban.",
  },
  
  link6: {
    linkName: "Tencent: the ultimate outsider",
    linkURL: "https://notboring.substack.com/p/tencent-the-ultimate-outsider",
    linkDesc: "Excellent piece on Tencent by Packy McCormick"
  },
  
  link7: {
    linkName: "The Great Online Game",
    linkURL: "https://www.notboring.co/p/the-great-online-game",
    linkDesc: "As soon as you connect to the Internet, you play the Great Online Game."
  },
};

const divMain = document.getElementById("div-main");

document.body.onload = function () {
  for (var key in links) {
    // skip loop if the property is from prototype
    if (!links.hasOwnProperty(key)) continue;

    var obj = links[key];

    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    const bgDiv = document.createElement("div");
    const afterBgDiv = document.createElement("div");
    const anchorTag = document.createElement("a");
    const para = document.createElement("p");
    const anchorTagText = document.createTextNode(`${obj.linkName}`);
    const paraText = document.createTextNode(`${obj.linkDesc}`);

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
    anchorTag.href = `${obj.linkURL}`;

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
  }
};

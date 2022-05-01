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
  
  link8: {
    linkName: "Advice for ambitious 19 yo",
    linkURL: "https://blog.samaltman.com/advice-for-ambitious-19-year-olds",
    linkDesc: "Sam Altman's advice to ambitious 19 year olds."
  },
  
  link9: {
    linkName: "Modesty kills excellence",
    linkURL: "https://limitlesscuriosity.com/essays/modesty-kills-excellence",
    linkDesc: "By making modesty a virtue, we have made excellence a vice."
  },
  
  link10: {
    linkName: "Why does DARPA work?",
    linkURL: "https://benjaminreinhardt.com/wddw",
    linkDesc: "Excellent breakdown of DARPA's structure."
  },
  
  link11: {
    linkName: "The Law of Accelerating Returns",
    linkURL: "https://www.kurzweilai.net/the-law-of-accelerating-returns",
    linkDesc: "Quite a long read on exponential returns."
  },
  
  link12: {
    linkName: "The Wild World of High Frequency Stock Trading",
    linkURL: "https://youtu.be/aMhI70KUAzw",
    linkDesc: "An 30 minute long video covering the nitty gritties of high frequency trading."
  },
  
  link13: {
    linkName: "How do Airplanes fly?",
    linkURL: "https://youtu.be/F077WDnB8P8",
    linkDesc: "YouTube video covering the basic physics behind airplanes."
  },
  
  link14: {
    linkName: "The ABCs of DAOs",
    linkURL: "https://1729.com/daos",
    linkDesc: "Decentralized Autonomous Organisations. Quite a mouthful, am I right? Read about them in this 8 minute long article."
  },
  
  link15: {
    linkName: "The History of TikTok",
    linkURL: "https://www.acquired.fm/episodes/tiktok",
    linkDesc: "A podcast episode that covers the history of one of the greatest tech start-ups of our era: ByteDance."
  },
  
  link16: {
    linkName: "Alias.co",
    linkURL: "https://alias.co/",
    linkDesc: "Keep a track of content posted by our generation's greatest minds."
  },
  
  link17: {
    linkName: "Ethereum: Into the Ether",
    linkURL: "https://open.spotify.com/episode/5ZXzLELW1489aCjUPHjTO4?si=cSw9xDxiR1WkoglJm09ANw&dl_branch=1&nd=1",
    linkDesc: "Amazing podcast episode on Ethereum."
  },
  
  link18: {
    linkName: "Buffet on Diversification",
    linkURL: "https://drive.google.com/file/d/1DGrB8gYRpt8Sp5UYCmk1i-k8gSeY0pqg/view",
    linkDesc: ""
  },
  
  link19: {
    linkName: "Effective Altruism",
    linkURL: "https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/",
    linkDesc: "A website dedicated to the concept of effective altruism."
  },
  
  link20: {
    linkName: "Business Essays",
    linkURL: "https://kscarrott.com/biz-essays/",
    linkDesc: "A list of essays that I found on a personal blog."
  },
  
  link21: {
    linkName: "Gwern.net",
    linkURL: "https://www.gwern.net/",
    linkDesc: "Gwern Branwen's personal blog. Find stuff on psychology, statistics, and technology."
  },
  
  link22: {
    linkName: "Assorted Quotes",
    linkURL: "http://mnielsen.github.io/notes/quotes/quotes.html",
    linkDesc: "Contains quotes by all sorts of individuals across various disciplines."
  },
  
  link23: {
    linkName: "Blog of Derek Sivers",
    linkURL: "https://sive.rs/",
    linkDesc: "Pretty self explanatory. Derek has a lot of cool content!"
  },
  
  link24: {
    linkName: "Writings by Max Hodak",
    linkURL: "https://maxhodak.com/writings/",
    linkDesc: "Max is the co-founder of Neuralink."
  },
  
  link25: {
    linkName: "Pmarchive",
    linkURL: "https://pmarchive.com/",
    linkDesc: "An archive of Marc Andreessen's blog."
  },
  
  link26: {
    linkName: "The Architecture of Tomorrow: An Interview with Ben Horowitz",
    linkURL: "https://sotonye.substack.com/p/the-architecture-of-tomorrow-an-interview?utm_campaign=post&utm_medium=web&utm_source=copy",
    linkDesc: "Influence of bits on the world of atoms, identifying people worth trusting, origin of joy, decoupling of the American Dream from the university. Ben goes deep in this interview."
  },
  
  link27: {
    linkName: "Creating an Environment",
    linkURL: "https://paulskallas.substack.com/p/creating-an-environment-part-3?utm_campaign=post&utm_medium=web&utm_source=copy",
    linkDesc: "Paul Skallas on addiction, abundance, and distraction."
  },
  
  link28: {
    linkName: "Blip Blop",
    linkURL: "https://eater.net/8bit",
    linkDesc: "Build an 8-bit computer from scratch!"
  },
  
  link29: {
    linkName: "Ultimate Deliberate Practice Guide",
    linkURL: "https://fs.blog/2021/04/deliberate-practice-guide/",
    linkDesc: "A blog by Farnam Street on mastering the art of deliberate practice."
  },
  
  link30: {
    linkName: "Meaningness",
    linkURL: "https://meaningness.com",
    linkDesc: "Better ways of thinking, feeling, and acting."
  },
  
  link31: {
    linkName: "Book summaries",
    linkURL: "https://blas.com",
    linkDesc: "Blas Moros has some really nice book summaries! Great rabbit hole."
  },
  
  link32: {
    linkName: "Fundamentals of Electrical Engineering",
    linkURL: "https://youtube.com/playlist?list=PLWv9VM947MKi_7yJ0_FCfzTBXpQU-Qd3K",
    linkDesc: "A playlist that has videos on electrical engineering basics."
  },
  
  link33: {
    linkName: "Technovelgy",
    linkURL: "http://technovelgy.com",
    linkDesc: "Track ideas from Science Fiction that are close to becoming reality"
  },
  
  link34: {
    linkName: "Patrick Collison interview",
    linkURL: "https://noahpinion.substack.com/p/interview-patrick-collison-co-founder",
    linkDesc: "Patrick is the billionaire founder of Stripe."
  },
  
  link35: {
    linkName: "Ishan was here",
    linkURL: "https://noahpinion.substack.com/p/interview-patrick-collison-co-founder",
    linkDesc: "Showing my code to krish"
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

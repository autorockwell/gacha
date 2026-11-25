
const questions = [
  // AXIS 1: A vs. B
  {
    axis: 0,
    video: "assets/Desert_Planet.mp4",
    story: `You spawn into a desert planet. Everything looks beige and endless under the weak sun. Oh well, it's been an okay li — Wait! You see two flickers off in the distance. You decide to...`,
    answers: [
      {
        text: "Go left. The light you see blinks almost frantically. Maybe it needs help.",
        trait: "A"
      },
      {
        text: "Go right. The light you see pulses like a steady heartbeat. Maybe it could help you.",
        trait: "B"
      }
    ]
  },
  {
    axis: 0,
    video: "assets/Two_Creatures.mp4",
    story: `It's just your luck! You've come across an oasis. The creatures at this watering hole are strange. Something licks the back of your knee. No one licks the back of your knee (for free). You look down in indignation at...`,
    answers: [
      {
        text: "A ze-brah. What a chill little freak.",
        trait: "B"
      },
      {
        text: "A frock-odile. They look comfortable and sensible.",
        trait: "A"
      }
    ]
  },
  {
    axis: 0,
    video: "assets/Cranes.mp4",
    story: `A flock of cranes rushes behind you, dunking you into the water. In another twist of fate, you seem to have fallen through a wormhole. Your bag slips out of your hands, and you can only save one item on your descent. You reach for...`,
    answers: [
      {
        text: "<em>Falling Through Wormholes for Dummies Vol. VII.</em> And to think you almost packed Proust.",
        trait: "A"
      },
      {
        text: "That flattened protein bar you refuse to throw out. Can't think on an empty stomach.",
        trait: "B"
      }
    ]
  },

  // AXIS 2: C vs. D
  {
    axis: 1,
    video: "assets/Meadow.mp4",
    story: `You land in a meadow. It's just like the laundry detergent commercials. The birds are singing, the clouds are billowing, the flowers are blooming. But you can't tune out the yelling of two very angry gnomes. You walk over to them...`,
    answers: [
      {
        text: "Confident in your mediation skills. All will be well in the shire.",
        trait: "D"
      },
      {
        text: "Curious about their conflict. How could paradise be so troubled?",
        trait: "C"
      }
    ]
  },
  {
    axis: 1,
    video: "assets/Swords.mp4",
    story: `It's been three hours. Gnomian politics are more complicated than you could have ever imagined, but most problems seem to derive from the dark overlord GNOME-STOMPER. Your companions inform you that the ruthless tyrant reaps the lands of their grain, controls the railways, and — among other things — stomps gnomes. They offer you their armory, and you choose to wield...`,
    answers: [
      {
        text: "Smingle, the trusty garden hoe. It's protected this meadow for generations",
        trait: "C"
      },
      {
        text: "GNOME-STOMPER-STOMPER, an experimental instrument that harnesses the power of nuclear fusion. It might just work.",
        trait: "D"
      }
    ]
  },
  {
    axis: 1,
    video: "assets/Faire.mp4",
    story: `You're on your merry way when your stomach starts rumbling. You take a detour to the nearby faire. It all smells so good, but you opt for...`,
    answers: [
      {
        text: "The triple-fried butter kraken. You hear from the faire-goer behind you that they're about to be acquired by private equity. You came just in time.",
        trait: "D"
      },
      {
        text: "The homunculus's cure. Cure's are good, right? Right?",
        trait: "C"
      }
    ]
  },

  // AXIS 3: E vs. F
  {
    axis: 2,
    video: "assets/Lair.mp4",
    story: `The volcanic lair is not very accessible. To make the rest of the way you...`,
    answers: [
      {
        text: "Grit your teeth and bear through it. Shortcuts have consequences.",
        trait: "E"
      },
      {
        text: "Fashion a vehicle out of your provisions. The supplies have to be used somehow.",
        trait: "F"
      }
    ]
  },
  {
    axis: 2,
    video: "assets/Eyes.mp4",
    story: `Heavy is the door to this wretched den. Suspicious eyes peer at you through a slit. They demand to know who you are. You introduce yourself as...`,
    answers: [
      {
        text: "An aspiring henchman. You've been interested in evil from a very young age.",
        trait: "E"
      },
      {
        text: "The jester. You're here for the three o'clock?",
        trait: "F"
      }
    ]
  },
  {
    axis: 2,
    video: "assets/Souvenir.mp4",
    story: `By George! That worked. The austere halls are lifeless. But, souvenirs or it didn't happen. A comfortable guy like GNOME-STOMPER surely wouldn't miss...`,
    answers: [
      {
        text: "A hemorrhoid relief potion. Who leaves that out?",
        trait: "E"
      },
      {
        text: "A shed phoenix claw. Seems like a fire hazard.",
        trait: "F"
      }
    ]
  },

  // AXIS 4: G vs. H
  {
    axis: 3,
    video: "assets/GS.mp4",
    story: `Fuuuuu — You've been caught stealing by the master of the house himself! You attempt to de-escalate by...`,
    answers: [
      {
        text: "Flirting with him. Is that a wand in his robes, or is he just happy to see you ;)",
        trait: "G"
      },
      {
        text: "Gaslighting him. You're imagining things, Big G, you must be tired...",
        trait: "H"
      }
    ]
  },
  {
    axis: 3,
    video: "assets/Fight.mp4",
    story: `He threatens to stomp you like a gnome! You take your trusty blade and swing at...`,
    answers: [
      {
        text: "His head. Let's end this once and for all.",
        trait: "H"
      },
      {
        text: "His legs. It would be <em>soooo</em> embarrassing if he tripped right now.",
        trait: "G"
      }
    ]
  },
  {
    axis: 3,
    video: "assets/Dance.mp4",
    story: `No! GNOME-STOMPER's sick moves overwhelm you. With gasping breath you say...`,
    answers: [
      {
        text: "Rosebud...",
        trait: "G"
      },
      {
        text: "I'll be back...",
        trait: "H"
      }
    ]
  }
];


// PERSONALITY PROFILES

const personalities = {
  crawl: {
    gif: "assets/crawl.gif"
  },

  hop: {
    gif: "assets/hop.gif"
  },

  tiptoe: {
    gif: "assets/tiptoe.gif"
  },

  run: {
    gif: "assets/run.gif"
  },

  fly: {
    gif: "assets/fly.gif"
  },

  swim: {
    gif: "assets/swim.gif"
  },

  slither: {
    gif: "assets/slither.gif"
  },

  drag: {
    gif: "assets/drag.gif"
  },

  inch: {
    gif: "assets/inch.gif"
  },

  stalk: {
    gif: "assets/stalk.gif"
  }
};


// MAP THE 16 COMBINATIONS TO THE 10 PERSONALITY TYPES

const personalityMap = {
  "ACEG": "crawl",
  "ACEH": "crawl",
  "ACFG": "crawl",

  "ACFH": "hop",
  "ADEG": "hop",
  "ADEH": "hop",

  "ADFG": "tiptoe",
  "ADFH": "tiptoe",

  "BCEG": "run",
  "BCEH": "run",

  "BCFG": "fly",
  "BCFH": "swim",

  "BDEG": "slither",
  "BDEH": "drag",

  "BDFG": "inch",
  "BDFH": "stalk"
};


// MARKER GROUPS

const markerGroups = [
  { left: "A", right: "B" },
  { left: "C", right: "D" },
  { left: "E", right: "F" },
  { left: "G", right: "H" }
];


let playerName = "";
let currentQuestion = 0;
let selectedAnswers = [];


// LORE

const lore1 = `After years of searching, you've finally found it.

Everyone thought <em>CREEPY-CRAWLIES</em> was lost to time, but you? You believed.`;

const lore2 = `The infamous arcade game stands before you in near mint condition.

Legend has it that anybody who stumbles onto its controls makes a deal with the devil, sealing their soul in a talisman in exchange for great power.

But there's only one way to truly know...`;

const lore3 = `You're not done yet.

But this vessel will no longer serve you.

Your transformation is nearly complete.`;


// TYPING

let typingInterval;

function typeText(element, text, button) {
  clearInterval(typingInterval);

  element.innerHTML = "";

  button.disabled = true;
  button.classList.remove("visible");

  const temp = document.createElement("div");
  temp.innerHTML = text;

  const fullText = temp.textContent;
  let index = 0;

  typingInterval = setInterval(() => {
    let remaining = index + 1;
    element.innerHTML = "";

    function copyTextNodes(source, target) {
      source.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const length = Math.min(node.textContent.length, remaining);

          target.appendChild(
            document.createTextNode(node.textContent.substring(0, length))
          );

          remaining -= length;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (remaining > 0) {
            const clone = node.cloneNode(false);
            target.appendChild(clone);
            copyTextNodes(node, clone);
          }
        }
      });
    }

    copyTextNodes(temp, element);

    index++;

    if (index >= fullText.length) {
      clearInterval(typingInterval);

      button.disabled = false;
      button.classList.add("visible");
    }
  }, 30);
}


// SCREEN ELEMENTS

const welcome = document.getElementById("welcome");
const story = document.getElementById("story");
const result = document.getElementById("result");

const fadeOverlay = document.getElementById("fadeOverlay");

function fadeTransition(callback) {
  fadeOverlay.classList.add("active");

  setTimeout(() => {
    callback();

    setTimeout(() => {
      fadeOverlay.classList.remove("active");
    }, 300);

  }, 2500);
}

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(element => {
    element.classList.remove("active");
    element.style.display = "none";
  });

  screen.classList.add("active");

  if (screen.id === "story") {
    screen.style.display = "grid";
  } else {
    screen.style.display = "flex";
  }
}


// START QUIZ

document.getElementById("startBtn").addEventListener("click", () => {
  const name = document.getElementById("username").value.trim();

  const nameError = document.getElementById("nameError");

  if (!name) {
      nameError.textContent = "Ahem! Your name?";
      return;
  }

  nameError.textContent = "";

  playerName = name;
  currentQuestion = 0;
  selectedAnswers = [];

  showScreen(document.getElementById("lore1"));

  typeText(
    document.getElementById("loreText1"),
    lore1,
    document.getElementById("loreNext1")
  );
});

document.getElementById("username").addEventListener("input", () => {
  document.getElementById("nameError").textContent = "";
});


// RENDER QUESTION

function renderQuestion() {
  const question = questions[currentQuestion];

  const questionVideo = document.getElementById("questionVideo");

  questionVideo.src = question.video;
  questionVideo.load();

  questionVideo.play().catch(error => {
     console.log("Video playback could not start:", error);
  });

  document.getElementById("questionNumber").textContent =
    `QUESTION ${currentQuestion + 1} / ${questions.length}`;

  document.getElementById("storyTitle").textContent =
    question.title || "";

  document.getElementById("storyText").innerHTML =
    question.story;

  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.className = "answer";
    button.innerHTML = answer.text;

    if (selectedAnswers[currentQuestion] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      selectedAnswers[currentQuestion] = index;

      answersContainer.querySelectorAll(".answer").forEach(item => {
        item.classList.remove("selected");
      });

      button.classList.add("selected");

      document.getElementById("nextBtn").disabled = false;
    });

    answersContainer.appendChild(button);
  });

  document.getElementById("nextBtn").disabled =
    selectedAnswers[currentQuestion] === undefined;

  document.getElementById("backBtn").style.display =
    currentQuestion === 0 ? "none" : "block";
}


// NEXT QUESTION

document.getElementById("nextBtn").addEventListener("click", () => {
  if (selectedAnswers[currentQuestion] === undefined) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    fadeTransition(() => {
      showScreen(document.getElementById("lore3"));

      typeText(
        document.getElementById("loreText3"),
        lore3,
        document.getElementById("loreNext3")
      );
    });
  }
});


// PREVIOUS QUESTION

document.getElementById("backBtn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});


// CALCULATE PERSONALITY RESULT

function calculateResult() {

  // Make sure all 12 questions have been answered.
  if (selectedAnswers.length !== questions.length ||
      selectedAnswers.some(answer => answer === undefined)) {
    console.error("Not all questions have been answered.");
    return;
  }

  // Count the points for all eight letters.
  const markerScores = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0
  };

  selectedAnswers.forEach((answerIndex, questionIndex) => {
    const selectedAnswer =
      questions[questionIndex].answers[answerIndex];

    markerScores[selectedAnswer.trait]++;
  });

  // Find the winning letter for each of the four axes.
  const personalityCode = markerGroups.map(group => {
    return markerScores[group.left] > markerScores[group.right]
      ? group.left
      : group.right;
  }).join("");

  // Look up the corresponding personality type.
  const winningType = personalityMap[personalityCode];
  const personality = personalities[winningType];

  if (!personality) {
    console.error("No personality found for code:", personalityCode);
    return;
  }

  document.getElementById("resultTitle").textContent =
  `${playerName}, your reincarnation is here.`;

  document.getElementById("resultGif").src = personality.gif;

  showScreen(result);

  // Helpful debugging information in the browser console.
  console.log("Marker scores:", markerScores);
  console.log("Personality code:", personalityCode);
  console.log("Personality type:", winningType);
}


// RESTART

document.getElementById("restartBtn").addEventListener("click", () => {
  const downloadBtn = document.getElementById("downloadBtn");

  downloadBtn.textContent = "Collect your talisman.";
  downloadBtn.disabled = false;
  downloadBtn.classList.remove("exchanged");
  selectedAnswers = [];
  currentQuestion = 0;

  showScreen(welcome);
});

// DOWNLOAD TALISMAN

document.getElementById("downloadBtn").addEventListener("click", () => {
  const gif = document.getElementById("resultGif");

  const safeName = playerName
    .trim()
    .replace(/[^a-z0-9]/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  const link = document.createElement("a");
  link.href = gif.src;
  link.download = `${safeName || "player"}-talisman.gif`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  const button = document.getElementById("downloadBtn");

  button.textContent = "Soul exchanged!";
  button.classList.add("exchanged");
  button.disabled = true;
  
});

// LORE 1 TO LORE 2

document.getElementById("loreNext1").addEventListener("click", () => {
  showScreen(document.getElementById("lore2"));

  typeText(
    document.getElementById("loreText2"),
    lore2,
    document.getElementById("loreNext2")
  );
});


// LORE 2 TO QUIZ

document.getElementById("loreNext2").addEventListener("click", () => {
  clearInterval(typingInterval);

  showScreen(story);
  renderQuestion();
});


// LORE 3 TO RESULT

document.getElementById("loreNext3").addEventListener("click", () => {
  clearInterval(typingInterval);

  calculateResult();
});
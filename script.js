
const questions = [
  {
    gif: "assets/Desert_Planet.GIF",
    story: `You spawn into a desert planet. Everything looks beige and endless under the weak sun.

Oh well, it's been an okay li—

Wait! You see two flickers off in the distance. You decide to...`,
    answers: [
      {
        text: "Go left. The light you see blinks almost frantically. Maybe it needs help.",
        type: "golden"
      },
      {
        text: "Go right. The light you see pulses like a steady heartbeat. Maybe it could help you.",
        type: "wild"
      }
    ]
  },
  {
    gif: "assets/Two_Creatures.GIF",
    story: `It's just your luck! You've come across an oasis.

The creatures at this watering hole are strange. Something licks the back of your knee. No one licks the back of your knee (for free).

You look down in indignation at...`,
    answers: [
      {
        text: "A ze-brah. What a chill little freak.",
        type: "golden"
      },
      {
        text: "A frock-odile. They look comfortable and sensible.",
        type: "wild"
      }
    ]
  },
  {
    gif: "assets/Cranes.GIF",
    story: `A flock of cranes rushes behind you, dunking you into the water.

In another twist of fate, you seem to have fallen through a wormhole.

Your bag slips out of your hands, and you can only save one item on your descent. You reach for...`,
    answers: [
      {
        text: "<em>Falling Through Wormholes for Dummies Vol. VII.</em> And to think you almost packed Proust.",
        type: "mysterious"
      },
      {
        text: "That flattened protein bar you refuse to throw out. Can't think on an empty stomach.",
        type: "wild"
      }
    ]
  },
  {
    gif: "assets/Meadow.GIF",
    story: `You land in a meadow. It's just like the laundry detergent commercials.

The birds are singing, the clouds are billowing, the flowers are blooming.

But you can't tune out the yelling of two very angry gnomes. You walk over to them...`,
    answers: [
      {
        text: "Confident in your mediation skills. All will be well in the shire.",
        type: "wild"
      },
      {
        text: "Curious about their conflict. How could paradise be so troubled?",
        type: "golden"
      }
    ]
  },
  {
    gif: "assets/Swords.GIF",
    story: `It's been three hours. Gnomian politics are more complicated than you could have ever imagined, but most problems seem to derive from the dark overlord GNOME-STOMPER.

Your companions inform you that the ruthless tyrant reaps the lands of their grain, controls the railways, and — among other things — stomps gnomes.

They offer you their armory, and you choose to wield...`,
    answers: [
      {
        text: "Smingle, the trusty garden hoe. It's protected this meadow for generations",
        type: "dreamer"
      },
      {
        text: "GNOME-STOMPER-STOMPER, an experimental instrument that harnesses the power of nuclear fusion. It might just work.",
        type: "wild"
      }
    ]
  },
  {
    gif: "assets/Faire.GIF",
    story: `You're on your merry way when your stomach starts rumbling. 

You take a detour to the nearby faire. It all smells so good, but you opt for...`,
    answers: [
      {
        text: "The triple-fried butter kraken. You hear from the faire-goer behind you that they're about to be acquired by private equity. You came just in time.",
        type: "dreamer"
      },
      {
        text: "The homunculus's cure. Cure's are good, right? Right?",
        type: "wild"
      }
    ]
  },
  {
    gif: "assets/Lair.GIF",
    story: `The volcanic lair is not very accessible. To make the rest of the way you...`,
    answers: [
      {
        text: "Grit your teeth and bear through it. Shortcuts have consequences.",
        type: "dreamer"
      },
      {
        text: "Fashion a vehicle out of your provisions. The supplies have to be used somehow.",
        type: "wild"
      }
    ]
  }, 
  {
    gif: "assets/Eyes.GIF",
    story: `Heavy is the door to this wretched den.
    
    Suspicious eyes peer at you through a slit. They demand to know who you are. 
    
    You introduce yourself as...`,
    answers: [
      {
        text: "An aspiring henchman. You've been interested in evil from a very young age.",
        type: "dreamer"
      },
      {
        text: "The jester. You're here for the three o'clock?",
        type: "wild"
      }
    ]
  }, 
  {
    gif: "assets/Souvenir.GIF",
    story: `By George! That worked.
    
    The austere halls are lifeless. But, souvenirs or it didn't happen.
    
    A comfortable guy like GNOME-STOMPER surely wouldn't miss...`,
    answers: [
      {
        text: "A hemorrhoid relief potion. Who leaves that out?",
        type: "dreamer"
      },
      {
        text: "A shed phoenix claw. Seems like a fire hazard.",
        type: "wild"
      }
    ]
  }, 
  {
    gif: "assets/GS.GIF",
    story: `Fuuuuu — 
    
    You've been caught stealing by the master of the house himself!
    
    You attempt to de-escalate by...`,
    answers: [
      {
        text: "Flirting with him. Is that a wand in his robes, or is he just happy to see you ;)",
        type: "dreamer"
      },
      {
        text: "Gaslighting him. You're imagining things, Big G, you must be tired...",
        type: "wild"
      }
    ]
  }, 
  {
    gif: "assets/Fight.GIF",
    story: `He threatens to stomp you like a gnome!
    
    You take your trusty blade and swing at...`,
    answers: [
      {
        text: "His head. Let's end this once and for all.",
        type: "dreamer"
      },
      {
        text: "His legs. It would be <em>soooo</em> embarrassing if he tripped right now.",
        type: "wild"
      }
    ]
  }, 
  {
    gif: "assets/Dance.GIF",
    story: `No! GNOME-STOMPER's sick moves overwhelm you.
    
    With gasping breath you say...`,
    answers: [
      {
        text: "Rosebud...",
        type: "dreamer"
      },
      {
        text: "I'll be back...",
        type: "wild"
      }
    ]
  }
];

const personalities = {
  golden: {
    name: "Mittens the Kitten",
    subtitle: "The Crepuscular Creeper",
    description: "TKTK",
    details: "TKTK"
  },

  wild: {
    name: "Mittens the Kitten",
    subtitle: "The Crepuscular Creeper",
    description: "TKTK",
    details: "TKTK"
  },

  mysterious: {
    name: "Mittens the Kitten",
    subtitle: "The Crepuscular Creeper",
    description: "TKTK",
    details: "TKTK"
  },

  dreamer: {
    name: "Mittens the Kitten",
    subtitle: "The Crepuscular Creeper",
    description: "TKTK",
    details: "TKTK"
  }
};

let playerName = "";
let currentQuestion = 0;
let selectedAnswers = [];
let scores = {
  golden: 0,
  wild: 0,
  mysterious: 0,
  dreamer: 0
};


// lore

const lore1 = `After years of searching, you've finally found it.

Everyone thought <em>CREEPY-CRAWLIES</em> was lost to time, but you? You believed.`;

const lore2 = `The infamous arcade game stands before you in near mint condition.

Legend has it that anybody who stumbles onto its controls makes a deal with the devil, sealing their soul in a talisman in exchange for great power.

But there's only one way to truly know...`;

const lore3 = `You're not done yet.

But this vessel will no longer serve you.

Your transformation is nearly complete.`;


// typing

let typingInterval;

function typeText(element, text, button) {
  clearInterval(typingInterval);

  element.innerHTML = "";

  button.disabled = true;
  button.classList.remove("visible");

  // Put the HTML into a temporary container
  const temp = document.createElement("div");
  temp.innerHTML = text;

  const fullText = temp.textContent;
  let index = 0;

  typingInterval = setInterval(() => {
    // Reveal the text progressively
    const visibleText = fullText.substring(0, index + 1);

    // format
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


const welcome = document.getElementById("welcome");
const story = document.getElementById("story");
const result = document.getElementById("result");

const fadeOverlay = document.getElementById("fadeOverlay");

function fadeTransition(callback) {
  // fade
  fadeOverlay.classList.add("active");

  setTimeout(() => {
    // Change screens while black
    callback();

    // restore
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
  screen.style.display = "flex";
}

document.getElementById("startBtn").addEventListener("click", () => {
  const name = document.getElementById("username").value.trim();

  if (!name) {
    alert("Please enter your name first.");
    return;
  }

  playerName = name;
  currentQuestion = 0;
  selectedAnswers = [];

  scores = {
    golden: 0,
    wild: 0,
    mysterious: 0,
    dreamer: 0
  };

  showScreen(document.getElementById("lore1"));

typeText(
  document.getElementById("loreText1"),
  lore1,
  document.getElementById("loreNext1")
);
});

function renderQuestion() {
  const question = questions[currentQuestion];

document.getElementById("questionGif").src = question.gif;

  document.getElementById("questionNumber").textContent =
    `QUESTION ${currentQuestion + 1} / ${questions.length}`;

  document.getElementById("storyTitle").textContent =
    question.title;

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

document.getElementById("backBtn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

function calculateResult() {
  scores = {
    golden: 0,
    wild: 0,
    mysterious: 0,
    dreamer: 0
  };

  selectedAnswers.forEach((answerIndex, questionIndex) => {
    const type = questions[questionIndex].answers[answerIndex].type;
    scores[type]++;
  });

  const winningType = Object.keys(scores).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );

  const personality = personalities[winningType];

  document.getElementById("resultTitle").textContent =
    `${playerName}, your reincarnation is here.`;

  document.getElementById("resultDescription").textContent =
    personality.description;

  document.getElementById("resultType").textContent =
    personality.name;

  document.getElementById("resultDetails").textContent =
    personality.details;

  showScreen(result);
}

// restart

document.getElementById("restartBtn").addEventListener("click", () => {
  selectedAnswers = [];
  currentQuestion = 0;

  showScreen(welcome);
});


// lore 1 to 2

document.getElementById("loreNext1").addEventListener("click", () => {

  showScreen(document.getElementById("lore2"));

  typeText(
    document.getElementById("loreText2"),
    lore2,
    document.getElementById("loreNext2")
  );

});


// lore 2 to quiz

document.getElementById("loreNext2").addEventListener("click", () => {

  clearInterval(typingInterval);

  showScreen(story);
  renderQuestion();

});

// lore 3 to result

document.getElementById("loreNext3").addEventListener("click", () => {

  clearInterval(typingInterval);

  calculateResult();

});

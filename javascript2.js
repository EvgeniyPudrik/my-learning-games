let display = document.getElementById("display");
let startButton = document.getElementById("button");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let score = document.getElementById("score");
let timeLeft = document.getElementById("timeLeft");

let conditions = [
  {question: "15 + 3 =", rightGuess: "18"},
  {question: "35 + 6 =", rightGuess: "41"},
  {question: "41 + 9 =", rightGuess: "50"},
  {question: "54 - 6 =", rightGuess: "48"},
  {question: "17 - 3 =", rightGuess: "14"},
  {question: "5 + 6 =", rightGuess: "11"},
  {question: "12 + 7 =", rightGuess: "19"},
  {question: "23 + 8 =", rightGuess: "31"},
  {question: "14 + 15 =", rightGuess: "29"},
  {question: "32 + 9 =", rightGuess: "41"},
  {question: "18 + 16 =", rightGuess: "34"},
  {question: "25 + 7 =", rightGuess: "32"},
  {question: "27 + 12 =", rightGuess: "39"},
  {question: "31 + 8 =", rightGuess: "39"},
  {question: "22 + 25 =", rightGuess: "47"},
  {question: "34 + 17 =", rightGuess: "51"},
  {question: "16 + 8 =", rightGuess: "24"},
  {question: "21 + 9 =", rightGuess: "30"},
  {question: "33 + 2 =", rightGuess: "35"},
  {question: "24 + 1 =", rightGuess: "25"},
  {question: "38 + 6 =", rightGuess: "44"},
  {question: "42 + 13 =", rightGuess: "55"},
  {question: "26 + 4 =", rightGuess: "30"},
  {question: "45 + 2 =", rightGuess: "47"},
  {question: "9 + 43 =", rightGuess: "52"},
  {question: "37 + 6 =", rightGuess: "43"},
  {question: "38 + 3 =", rightGuess: "41"},
  {question: "44 + 1 =", rightGuess: "45"},
  {question: "35 + 2 =", rightGuess: "37"},
  {question: "48 + 19 =", rightGuess: "67"},
  {question: "39 + 10 =", rightGuess: "49"},
  {question: "52 + 8 =", rightGuess: "60"},
  {question: "41 + 5 =", rightGuess: "46"},
  {question: "46 + 7 =", rightGuess: "53"},
  {question: "55 + 9 =", rightGuess: "64"},
  {question: "38 + 7 =", rightGuess: "45"},
  {question: "47 + 9 =", rightGuess: "56"},
  {question: "58 + 8 =", rightGuess: "66"},
  {question: "49 + 8 =", rightGuess: "57"},
  {question: "63 + 15 =", rightGuess: "78"},
  {question: "52 + 7 =", rightGuess: "59"},
  {question: "76 + 5 =", rightGuess: "81"},
  {question: "57 + 6 =", rightGuess: "63"},
  {question: "64 + 3 =", rightGuess: "67"},
  {question: "48 + 9 =", rightGuess: "57"},
  {question: "56 + 13 =", rightGuess: "69"},
  {question: "67 + 4 =", rightGuess: "71"},
  {question: "58 + 4 =", rightGuess: "62"},
  {question: "73 + 19 =", rightGuess: "92"},
  {question: "64 + 9 =", rightGuess: "73"},
  {question: "25 + 8 =", rightGuess: "33"},
  {question: "82 + 2 =", rightGuess: "84"},
  {question: "61 + 10 =", rightGuess: "71"},
  {question: "78 + 9 =", rightGuess: "87"},
  {question: "86 + 3 =", rightGuess: "89"},
  {question: "20 - 4 =", rightGuess: "16"},
  {question: "18 - 7 =", rightGuess: "11"},
  {question: "25 - 9 =", rightGuess: "16"},
  {question: "30 - 2 =", rightGuess: "28"},
  {question: "27 - 5 =", rightGuess: "22"},
  {question: "34 - 8 =", rightGuess: "26"},
  {question: "40 - 7 =", rightGuess: "33"},
  {question: "45 - 9 =", rightGuess: "36"},
  {question: "50 - 3 =", rightGuess: "47"},
  {question: "36 - 8 =", rightGuess: "28"},
  {question: "42 - 6 =", rightGuess: "36"},
  {question: "55 - 1 =", rightGuess: "54"},
  {question: "48 - 7 =", rightGuess: "41"},
  {question: "60 - 7 =", rightGuess: "53"},
  {question: "53 - 8 =", rightGuess: "45"},
  {question: "67 - 9 =", rightGuess: "58"},
  {question: "70 - 6 =", rightGuess: "64"},
  {question: "64 - 5 =", rightGuess: "59"},
  {question: "75 - 8 =", rightGuess: "67"},
  {question: "81 - 7 =", rightGuess: "74"},
  {question: "90 - 4 =", rightGuess: "86"},
  {question: "85 - 3 =", rightGuess: "82"},
  {question: "72 - 5 =", rightGuess: "67"},
  {question: "68 - 9 =", rightGuess: "59"},
  {question: "77 - 4 =", rightGuess: "73"},
  {question: "95 - 10 =", rightGuess: "85"},
  {question: "88 - 10 =", rightGuess: "78"},
  {question: "100 - 5 =", rightGuess: "95"},
  {question: "93 - 8 =", rightGuess: "85"},
  {question: "84 - 9 =", rightGuess: "75"},
  {question: "76 - 8 =", rightGuess: "68"},
  {question: "69 - 1 =", rightGuess: "68"},
  {question: "97 - 20 =", rightGuess: "77"},
  {question: "100 - 40 =", rightGuess: "60"},
  {question: "92 - 30 =", rightGuess: "62"},
  {question: "83 - 6 =", rightGuess: "77"},
  {question: "74 - 7 =", rightGuess: "67"},
  {question: "46 - 30 =", rightGuess: "16"},
  {question: "59 - 20 =", rightGuess: "39"},
  {question: "71 - 4 =", rightGuess: "67"}
];

let otherGuesses = [
  {wrongGuess: "34"},
  {wrongGuess: "57"},
  {wrongGuess: "18"},
  {wrongGuess: "5"},
  {wrongGuess: "2"},
  {wrongGuess: "9"},
  {wrongGuess: "100"},
  {wrongGuess: "263"},
  {wrongGuess: "69"},
  {wrongGuess: "78"},
  {wrongGuess: "82"},
  {wrongGuess: "13"},
  {wrongGuess: "24"},
  {wrongGuess: "45"},
  {wrongGuess: "я не знаю"},
  {wrongGuess: "1"},
  {wrongGuess: "36"},
  {wrongGuess: "77"},
  {wrongGuess: "55"},
  {wrongGuess: "44"},
  {wrongGuess: "32"},
  {wrongGuess: "свинка"},
  {wrongGuess: "19"},
  {wrongGuess: "37"},
  {wrongGuess: "46"},
  {wrongGuess: "58"},
  {wrongGuess: "63"},
  {wrongGuess: "74"},
  {wrongGuess: "попа"},
  {wrongGuess: "60"},
  {wrongGuess: "50"},
  {wrongGuess: "ХОЧУ ЇСТИ!!!!"},
  {wrongGuess: "71"},
  {wrongGuess: "30"}
];

music.play();
let randomCondition =
  conditions[Math.floor(Math.random() * conditions.length)];
let scoreNumber = 0;
let time = 60;

let gameActive = false;
let gameStarted = false;

score.innerText = scoreNumber;
timeLeft.innerText = time;

let startGame = function() {
  display.innerText = randomCondition.question;
};

let answers = function() {

  let wrongAnswers = [...new Set(
    otherGuesses.map(answer => answer.wrongGuess)
  )].filter(answer => answer !== randomCondition.rightGuess).sort(() => Math.random() - 0.5).slice(0, 3);
  let allAnswers = [
    randomCondition.rightGuess,...wrongAnswers
  ];

  allAnswers.sort(() => Math.random() - 0.5);

  let sections = [
    section1,
    section2,
    section3,
    section4
  ];
  for (let i = 0; i < sections.length; i++) {
    sections[i].innerText = allAnswers[i];
  }
};

let globalSections = [
  section1,
  section2,
  section3,
  section4
];

let checkAnswer = function() {
  globalSections.forEach(section => {
    section.addEventListener("click", function() {
      if (gameActive === false) {
        return;
      }
      gameActive = false;

      if (section.innerText === randomCondition.rightGuess) {
        section.style.background = "green";
        scoreNumber++;
        score.innerText = scoreNumber;
      } else {
        section.style.background = "red";
      }
      setTimeout(function() {
        nextRound();
        buttonSound.play();
      }, 1000);
    });
  });
};

let start = function() {
  let startTime = setInterval(function() {
    time--;
    timeLeft.innerText = time;
    if (time <= 0) {
      clearInterval(startTime);
      gameActive = false;
      alert(`Час вийшов! Твій рахунок: ${scoreNumber}`);
      location.reload();
    }
  }, 1000);
};

let nextRound = function() {
  randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
  globalSections.forEach(section => {
    section.style.background = "#b3d4fc";
  });

  startGame();
  answers();
  gameActive = true;
};

checkAnswer();
startButton.addEventListener("click", function() {
  if (gameStarted === true) {
    return;
  }
 gameStarted = true;
 gameActive = true;
 startGame();
 answers();
 start();
 startButton.disabled = true;
 startButton.innerText = "Гра триває...";
});

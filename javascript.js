let display = document.getElementById("display");
let startButton = document.getElementById("button");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let score = document.getElementById("score");
let timeLeft = document.getElementById("timeLeft");
let music = document.getElementById("music");
let buttonSound = document.getElementById("buttonSound");

let flags = [
  {img: "img/Flag_of_Ukraine.svg.webp", name: "Україна"},
  {img: "img/Flag_of_Poland.svg.webp", name: "Польща"},
  {img: "img/Flag_of_France.svg.webp", name: "Франція"},
  {img: "img/Flag_of_Portugal_(official).svg.webp", name: "Португалія"},
  {img: "img/Flag_of_Spain.svg.webp", name: "Іспанія"},
  {img: "img/Flag_of_Argentina.svg.webp", name: "Аргентина"},
  {img: "img/Flag_of_Japan.svg.webp", name: "Японія"},
  {img: "img/Flag_of_Canada_(Pantone).svg.webp", name: "Канада"},
  {img: "img/Flag_of_Italy.svg.webp", name: "Італія"},
  {img: "img/Flag_of_Bulgaria.svg.webp", name: "Болгарія"},
  {img: "img/Flag_of_Romania.svg.webp", name: "Румунія"},
  {img: "img/Flag_of_Greece.svg.webp", name: "Греція"},
  {img: "img/Flag_of_Egypt.svg.webp", name: "Єгипет"},
  {img: "img/Flag_of_the_Czech_Republic.svg.webp", name: "Чехія"},
  {img: "img/Flag_of_Finland.svg.webp", name: "Фінляндія"},
  {img: "img/Flag_of_Sweden.svg.webp", name: "Швеція"},
  {img: "img/Flag_of_the_United_Kingdom_(3-5).svg.webp", name: "Великобританія"},
  {img: "img/Flag_of_Scotland.svg.webp", name: "Шотландія"},
  {img: "img/Flag_of_Brazil.svg.webp", name: "Бразилія"},
  {img: "img/Flag_of_the_U.S..svg.webp", name: "США"},
  {img: "img/Flag_of_Turkey.svg.webp", name: "Туреччина"},
  {img: "img/Flag_of_Thailand.svg.webp", name: "Тайланд"},
  {img: "img/Flag_of_Kuwait.svg.webp", name: "Кувейт"},
  {img: "img/Flag_of_Lithuania.svg.webp", name: "Литва"},
  {img: "img/Flag_of_Latvia.svg.webp", name: "Латвія"},
  {img: "img/Flag_of_Estonia.svg.webp", name: "Естонія"},
  {img: "img/Flag_of_Serbia.svg.webp", name: "Сербія"},
  {img: "img/Flag_of_Austria.svg.webp", name: "Австрія"},
  {img: "img/Flag_of_Denmark.svg.webp", name: "Данія"},
  {img: "img/Flag_of_the_Netherlands.svg.webp", name: "Нідерланди"},
  {img: "img/Flag_of_Georgia.svg.webp", name: "Грузія"},
  {img: "img/Flag_of_Monaco.svg.webp", name: "Монако"},
  {img: "img/Flag_of_Croatia.svg.webp", name: "Хорватія"},
  {img: "img/Flag_of_Iran.svg.webp", name: "Іран"},
  {img: "img/Flag_of_India.svg.webp", name: "Індія"},
  {img: "img/Flag_of_Cameroon.svg.webp", name: "Камерун"},
  {img: "img/Flag_of_the_Republic_of_the_Congo.svg.webp", name: "Конго"},
  {img: "img/Flag_of_Angola.svg.webp", name: "Ангола"},
  {img: "img/Flag_of_Nepal.svg.webp", name: "Непал"},
  {img: "img/Flag_of_the_Republic_of_China.svg.webp", name: "Тайвань"}
];

let randomFlag = flags[Math.floor(Math.random() * flags.length)];

music.play();

let otherCounties = [
  {name: "США"},
  {name: "Болгарія"},
  {name: "Швеція"},
  {name: "Норвегія"},
  {name: "Великобританія"},
  {name: "Канада"},
  {name: "Німеччина"},
  {name: "Франція"},
  {name: "Туреччина"},
  {name: "Румунія"},
  {name: "Чехія"},
  {name: "Португалія"},
  {name: "Ірландія"},
  {name: "Аргентина"},
  {name: "Бразилія"},
  {name: "Іспанія"},
  {name: "Італія"},
  {name: "Швеція"},
  {name: "Кувейт"},
  {name: "Єгипет"},
  {name: "Японія"},
  {name: "Польща"},
  {name: "Греція"}]

let scoreNumber = 0;
let time = 60;
let gameActive = false;

let startGame = function() {
  display.innerHTML = `<img src="${randomFlag.img}" alt="Прапор країни">`;
}

let answers = function() {

  let uniqueCountries = otherCounties.filter(function(country, index, array) {
    return (
      country.name !== randomFlag.name &&
      index === array.findIndex(function(item) {
        return item.name === country.name;
      })
    );
  });

  let wrongAnswers = uniqueCountries
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  let allAnswers = [
    randomFlag.name,
    ...wrongAnswers.map(country => country.name)
  ];

  allAnswers.sort(() => Math.random() - 0.5);

  let sections = [section1, section2, section3, section4];

  for (let i = 0; i < sections.length; i++) {
    sections[i].innerText = allAnswers[i];
  }

  score.innerText = scoreNumber;
  timeLeft.innerText = time;
}

let globalSections = [section1, section2, section3, section4];

let checkAnswer = function () {
  globalSections.forEach(section => {
    section.addEventListener( "click", function() {
      if (gameActive === false) {
        return;
      }
      gameActive = false;

      if(section.innerText === randomFlag.name) {
        section.style.background = "green";
        score.innerText = ++scoreNumber;
      }
      else {
        section.style.background = "red";
      }
      setTimeout(function() {
        nextRound();
      }, 1000);
      buttonSound.play();
    })
  })
}

let start = function () {
  let startTime = setInterval(function () {
    timeLeft.innerText = --time;
    if (time <= 0) {
      clearInterval(startTime);
      alert(`Час вийшов! твій рахунок: ${scoreNumber}`)
      location.reload();
    }
 }, 1000)
}

let go = function() {
  checkAnswer();
  startButton.addEventListener("click", function () {
    gameActive = true;
    startGame();
    answers();
    start();
  })
};

go();

let nextRound = function() {
  randomFlag = flags[Math.floor(Math.random() * flags.length)];
  globalSections.forEach(section => {
  section.style.background = "#b3d4fc";
});
  startGame();
  answers();
  gameActive = true;
};

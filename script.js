//gebruikt https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48#:~:text=addEventListener("click"%2C%20(),JavaScript%20web%20elements%20for%20beginners.
//met een klasgenoot samen gekeken en hij beveelde me deze website aan. (Extra research)
// Audios van https://pixabay.com/sound-effects/search/game-over/

let money = 0;
let honger = 100;
let training = 100;
let vrolijk = 100;
let gameOver = 0;
let elementalBurst_win = false;
let cynoPic = document.querySelector ("#cynoPic")


// Buttons

const buttonhonger = document.querySelector("#btn_honger")
const buttontraining = document.querySelector("#btn_training")
const buttonvrolijk = document.querySelector("#btn_vrolijk")

const buttonitem1 = document.querySelector("#btn_item1")
const buttonitem2 = document.querySelector("#btn_item2")
const buttonitem3 = document.querySelector("#btn_item3")
const buttonitem4 = document.querySelector("#btn_item4")

const elementalBurstAudio = new Audio ("assets/elementalBurstaudio.mp3")

buttonhonger.addEventListener('click',fillHonger)
buttontraining.addEventListener('click',fillTraining)
buttonvrolijk.addEventListener('click',fillVrolijk)

buttonitem1.addEventListener('click',adeptusTemptationEffect)
buttonitem2.addEventListener('click',koopEenwapenEffect)
buttonitem3.addEventListener('click',koopAntidepressivaEffect)
buttonitem4.addEventListener('click',elementalBurst)

// Timers

let moneyklok = setInterval(krijgMoney, 500);
let klok1 = setInterval(depleteH, 350);
let klok2 = setInterval(depleteT, 360);
let klok3 = setInterval(depleteV, 370);

// Bars

statbar_hunger = document.querySelector("statbar_hunger");
statbar_training = document.querySelector("statbar_training");
statbar_vrolijk = document.querySelector("statbar_vrolijk");


// Fill functions

function fillHonger() {
	if (honger <= 99 && honger != 0) {
		honger += 2;
		document.querySelector("statbar_honger").value = honger;
	}
	else if (honger == 0) {
		honger += 0;
	}
}

function fillTraining() {
	if (training <= 99 && training != 0) {
		training += 2;
		document.querySelector("statbar_training").value = training;
	}
	else if (training == 0) {
		training += 0;
	}
}

function fillVrolijk() {
	if (vrolijk <= 99 && vrolijk != 0) {
		vrolijk += 2;
		document.querySelector("statbar_vrolijk").value = vrolijk;
	}
	else if (vrolijk == 0) {
		vrolijk += 0;
	}
}

function krijgMoney() {
	if (honger > 0 && training > 0 && vrolijk > 0) {
		money++;
		document.getElementById("moneyvalue").textContent = "$" + money;
	}
}

// Gameover check

function gameOvercheck() {
	if (honger == 0 && training == 0 && vrolijk == 0 && gameOver == 0) {
		alert("Game Over!");
		gameOver++;
		cynoPic.src = "images/cynoGameOver.png"
	}
}

// Item functions

function adeptusTemptationEffect() {
	if (honger == 0 && money >= 50 && gameOver == 0) {
		money -= 50;
		honger += 50;
		klok1 = setInterval(depleteH, 350);
		depleteH();
	}
}

function koopEenwapenEffect() {
	if (training == 0 && money >= 75 && gameOver == 0) {
		money -= 75;
		training += 50;
		klok2 = setInterval(depleteT, 360);
		depleteT();
	}
}

function koopAntidepressivaEffect() {
	if (vrolijk == 0 && money >= 100 && gameOver == 0) {
		money -= 100;
		vrolijk += 50;
		klok3 = setInterval(depleteV, 370);
		depleteV();
	}
}

function elementalBurst() {
	if (elementalBurst_win == false && money >= 300) {
		money -= 300;
		elementalBurst_win = true;
		clearInterval(klok1);
		clearInterval(klok2);
		clearInterval(klok3);
		clearInterval(moneyklok);
		cynoPic.src = "images/cynoElementalBurst.png"
		alert("Gefeliciteerd! jij hebt Cyno tot de krijger gemaakt die hij is!");
		elementalBurstAudio.play()
	}
}
// Deplete functions

function depleteH() {
	if (honger == 0) {
		clearInterval(klok1);
		alert("Cyno verhongerd!");
		gameOvercheck();
	}
	else {
		honger--;
		document.getElementById("statbar_honger").value = honger;
	}
}

function depleteT() {
	if (training == 0) {
		clearInterval(klok2);
		alert("Cyno verveelt zich te erg!");
		gameOvercheck();
	}
	else {
		training--;
		document.getElementById("statbar_training").value = training;
	}
}

function depleteV() {
	if (vrolijk == 0) {
		clearInterval(klok3);
		alert("Cyno is depressief!");
		gameOvercheck();
	}
	else {

		vrolijk--;

		document.getElementById("statbar_vrolijk").value = vrolijk;
	}
}



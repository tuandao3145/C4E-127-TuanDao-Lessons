let noBtn = document.getElementById("no");
let app = document.getElementById("app");

const randomNum = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};

const troll = () => {
	let maxY = window.innerHeight - noBtn.offsetHeight;
	let maxX = window.innerWidth - noBtn.offsetWidth;

	let X = randomNum(0, maxX);
	let Y = randomNum(0, maxY);

	noBtn.style.position = "absolute";
	noBtn.style.left = `${X}px`;
	noBtn.style.top = `${Y}px`;
};

// method01: use addEventListener
// noBtn.addEventListener("mouseover", troll);

// method02: use onmouseenter
noBtn.onmouseenter = () => {
	troll();
};

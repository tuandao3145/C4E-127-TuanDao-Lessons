//A1
const longestStr = (strList) => {
	let result = [];
	let maxLen = 0;
	for (let subStr of strList) {
		if (subStr.length >= maxLen) {
			maxLen = subStr.length;
		}
	}
	for (let subStr of strList) {
		if (subStr.length === maxLen) {
			result.push(subStr);
		}
	}

	return result;
};

let requireList = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
console.log(longestStr(requireList));

//A2
const sumTeamWeight = (weightList) => {
	let result = [];
	let weightA = 0;
	let weightB = 0;
	for (let i = 0; i < weightList.length; i++) {
		if (i % 2 == 0) {
			weightA += weightList[i];
		} else {
			weightB += weightList[i];
		}
	}
	result.push(weightA);
	result.push(weightB);
	return result;
};

let peopleList = [60, 40, 55, 75, 64];
console.log(sumTeamWeight(peopleList));

//B
let generateBtn = document.getElementById("generate-btn");
let result = document.getElementById("result");
let copyBtn = document.getElementById("copy-btn");
let appBG = "#FFFFFF";

const generateColor = () => {
	let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
	appBG = `linear-gradient(to right, #FFFFFF, ${randomColor})`;
	document.body.style.background = appBG;
	result.innerHTML = appBG;
};

const copyColorCode = () => {
	navigator.clipboard.writeText(result.value);
	alert("Copied color hex code: \n" + result.value);
};

generateBtn.addEventListener("click", generateColor);
copyBtn.addEventListener("click", copyColorCode);

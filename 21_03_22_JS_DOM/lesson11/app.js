// ex1
let myPhoto = document.getElementById("my-photo");
let src1 =
	"https://i.pinimg.com/originals/6c/2e/07/6c2e07660c6fcf90d6a362ced622e1ad.png";
let src2 = "https://i.imgflip.com/4u72kt.png";

const hideImage = () => {
	myPhoto.style.display = "none";
};

const changeImage = () => {
	if (myPhoto.getAttribute("src") == src1) {
		myPhoto.setAttribute("src", src2);
	} else {
		myPhoto.setAttribute("src", src1);
	}
};

const showImage = () => {
	myPhoto.style.display = "initial";
};

const resizeImage = () => {
	if (myPhoto.style.height == "200px") {
		myPhoto.style.height = "50px";
		myPhoto.style.width = "50px";
	} else {
		myPhoto.style.height = "200px";
		myPhoto.style.width = "200px";
	}
};

//ex2
let taskList = document.getElementById("task-list");
let input = document.getElementById("input-task");

const addTask = () => {
	let task = input.value;
	let newTask = document.createElement("li");
	newTask.innerHTML = task;
	taskList.append(newTask);
	input.value = ""; // reset input field
};

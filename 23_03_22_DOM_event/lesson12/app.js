let todoInput = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");

const addTodo = () => {
	let newInputTask = todoInput.value;
	let today = new Date();
	let todayFormatted =
		today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
	if (newInputTask == "") {
		alert("Cần nhập vào nội dung nhiệm vụ");
	} else {
		// create
		console.log("creating");
		let newTodoItem = document.createElement("li");
		let newTodoContent = document.createElement("div");
		let newTask = document.createElement("span");
		let newCreateDate = document.createElement("span");
		let newDeleteBtn = document.createElement("button");

		// add class
		newTodoItem.classList.add("todo-item", "center");
		newTodoContent.classList.add("todo-content", "center");
		newTask.classList.add("todo-task");
		newCreateDate.classList.add("create-date");
		newDeleteBtn.classList.add("todo-del-btn");

		// add text
		newTask.innerHTML = newInputTask;
		newCreateDate.innerHTML = "Ngày tạo: " + todayFormatted;
		newDeleteBtn.innerHTML = "Xoá";

		// add to parent
		newTodoContent.append(newTask);
		newTodoContent.append(newCreateDate);
		newTodoItem.append(newTodoContent);
		newTodoItem.append(newDeleteBtn);
		todoList.append(newTodoItem);

		//reset input
		todoInput.value = "";
	}
};

const deleteTodo = (e) => {
	// param e is auto capture from addEventListener
	if (e.target.className == "todo-del-btn") {
		// get the target of the clicking action
		let li = e.target.parentElement; // get the parent of del button, that li element
		li.parentNode.removeChild(li); // stand at the Parent of li, then remove li
	}
};

addBtn.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteTodo);

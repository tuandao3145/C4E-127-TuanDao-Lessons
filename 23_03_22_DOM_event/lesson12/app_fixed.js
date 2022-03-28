// data of todo List
let todoData = [
	{
		task: "Nhiệm vụ 1",
		createDate: "2022/03/23",
	},
	{
		task: "Nhiệm vụ 2",
		createDate: "2022/03/22",
	},
	{
		task: "Nhiệm vụ 3",
		createDate: "2022/03/19",
	},
];

// any variable gotten from HTMl will have pre-fix "$"
let $addBtn = document.getElementById("add-btn");
let $todoList = document.getElementById("todo-list");
let $todoInput = document.getElementById("todo-input");

// function to show todo in List
const showTodo = (data, $list) => {
	console.log(data);
	for (let i = 0; i < data.length; i++) {
		let item = data[i];
		//
		let $li = document.createElement("li");
		$li.classList.add("todo-item", "center");
		$li.innerHTML = `
			<div class="todo-content center">
				<span class="todo-task">${item.task}</span>
				<span class="create-date">Ngày tạo: ${item.createDate}</span>
			</div>
		`;
		//
		let $delBtn = document.createElement("button");
		$delBtn.classList.add("todo-del-btn");
		$delBtn.innerHTML = `Xoá`;
		//
		$delBtn.addEventListener("click", () => deleteTodo(data, i, $list));
		//
		$li.append($delBtn);
		$list.append($li);
	}
};

//function to add a new item to the todo list
const addTodo = (data, $list) => {
	//
	$list.innerHTML = "";
	let newTask = $todoInput.value;
	//
	let today = new Date();
	let year = today.getFullYear();
	let month =
		today.getMonth() + 1 < 10
			? "0" + (today.getMonth() + 1).toString()
			: today.getMonth() + 1;
	let date = today.getDate();
	let newCreateDate = year + "/" + month + "/" + date;
	//
	if (newTask == "") {
		alert("Cần nhập vào nội dung nhiệm vụ");
	} else {
		data.push({
			task: newTask,
			createDate: newCreateDate,
		});
	}
	//
	$todoInput.value = "";
	showTodo(data, $list);
};

// function to delete a item in todo list if its Delete button is clicked
const deleteTodo = (data, index, $list) => {
	//
	$list.innerHTML = "";
	//
	data.splice(index, 1); // array.splice(index, n) : remove n element from array[index]
	//
	showTodo(data, $list);
};

$addBtn.addEventListener("click", () => addTodo(todoData, $todoList));

//
showTodo(todoData, $todoList);

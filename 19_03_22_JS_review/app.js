// function checkNum(a, n) {
// 	let result = true;
// 	for (let i of a) {
// 		console.log(i);
// 		if (i < n) {
// 			result = false;
// 			break;
// 		}
// 	}
// 	return result;
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(checkNum(nums, 0));

// let loverList = [
// 	{
// 		name: "Nie",
// 		age: 24,
// 		address: "D12",
// 		beauty: 9,
// 		kindness: 7,
// 		hobbies: ["yoga", "working", "skincare", "travel"],
// 	},
// 	{
// 		name: "NTBT",
// 		age: 26,
// 		address: "D5",
// 		beauty: 8,
// 		kindness: 8,
// 		hobbies: ["teaching", "working", "food", "travel"],
// 	},
// 	{
// 		name: "VTKN",
// 		age: 28,
// 		address: "TBD",
// 		beauty: 10,
// 		kindness: 6,
// 		hobbies: ["gym", "working", "skincare", "money"],
// 	},
// 	{
// 		name: "Dan",
// 		age: 20,
// 		address: "PND",
// 		beauty: 8,
// 		kindness: 10,
// 		hobbies: ["learning", "tea", "travel"],
// 	},
// ];

// function mostBeautiful(pList) {
// 	let result = pList[0];

// 	for (let i = 1; i < pList.length; i++) {
// 		if (pList[i].beauty > result.beauty) {
// 			result = pList[i];
// 		}
// 	}
// 	return result;
// }

// function leastKind(pList) {
// 	let result = pList[0];

// 	for (let i = 1; i < pList.length; i++) {
// 		if (pList[i].kindness < result.kindness) {
// 			result = pList[i];
// 		}
// 	}
// 	return result;
// }

// function findYoung(pList, n) {
// 	let result = [];
// 	for (person of pList) {
// 		if (person.age < n) {
// 			result.push(person);
// 		}
// 	}
// 	return result;
// }

// console.log(mostBeautiful(loverList));
// console.log(leastKind(loverList));
// console.log(findYoung(loverList, 26));

// //dùng method array

// // dùng method filter kèm theo function arrow

// // 1 tìm các số lớn hơn 3
// // 2 tìm các số chia hết cho 2
// // 3 tìm các số chia hết cho 2 và lớn hơn 3
// // 4 tìm số mà số ý bằng độ dài của mảng / 2
// const array = [2, 100, 6, 7, 10000, 5, 7, 4];

// let ex1 = array.filter((value) => value >= 3);
// console.log(ex1);

// let ex2 = array.filter((value) => value % 2 === 0);
// console.log(ex2);

// let ex3 = array.filter((value) => value % 2 === 0 && value > 3);
// console.log(ex3);

// let ex4 = array.filter((value) => value == array.length / 2);
// console.log(ex4);

// // hàm check nếu tổng >3 hoặc cả 2 bằng nhau thì ko in ra gì
// const checkCouple = (a, b) => {
// 	if (a + b > 3 || a === b) {
// 		return;
// 	} else {
// 		console.log(a + b);
// 	}
// };

// const checkCouple = (a, b) => {
// 	a + b > 3 && a == b ? null : a + b;
// };

// console.log(checkCouple(4, 2));

// const checkDivideTwo = (a) =>
// 	a.length > 5 ? a.filter((value) => value % 2 === 0) : null;

// console.log(checkDivideTwo(array));

// // Object in ES6
// // compare 02 objects, JS will compare 02 addresses of these objects, not values =>
// // js has 02 type of variable: primitive and object
// let person = {
// 	name: "mindx",
// 	age: 60,
// };

// console.log(person);

// // copy 1 object
// let copyPerson = { ...person };

// console.log(copyPerson);

// // get a value of a key in object by ES6
// let a = {age} person
// console.log(a)

// const array = [1, 2, 3, 4, 5, 6, 7];

// let a = prompt("Nhập số cần xoá: ");

// console.log(array.filter((value) => value != a));

const people = [
	{
		name: "A",
		age: 6,
	},
	{
		name: "B",
		age: 10,
	},
	{
		name: "C",
		age: 20,
	},
	{
		name: "D",
		age: 30,
	},
	{
		name: "C",
		age: 20,
	},
];

// let a = prompt("Nhập vào name cần tìm: ");
let a = "C";

// let result = people.filter((person) =>
// 	person.name === a
// 		? person.age > 18
// 			? person
// 			: "Có người tên này nhưng quá trẻ"
// 		: "Không có người tên này"
// );

const checkPerson = (name) => {
	let findName = people.filter((person) => person.name === name);
	let findAge = findName.filter((person) => person.age > 18);
	return findName.length === 0
		? "Không có người tên này"
		: findAge.length === 0
		? "Có người tên này nhưng quá trẻ"
		: findAge;
};

console.log(checkPerson(a));
// checkPerson(a);

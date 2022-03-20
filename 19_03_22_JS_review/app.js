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

//dùng method array

// dùng method filter kèm theo function arrow

//1 tìm các số lớn hơn 3
//2 tìm các số chia hết cho 2
//3 tìm các số chia hết cho 2 và lớn hơn 3
//4 tìm số mà số ý bằng độ dài của mảng / 2
const array = [2, 100, 6, 7, 10000, 5, 7, 4];

let ex1 = array.filter((value) => value >= 3);
console.log(ex1);

let ex2 = array.filter((value) => value % 2 === 0);
console.log(ex2);

let ex3 = array.filter((value) => value % 2 === 0 && value > 3);
console.log(ex3);

let ex4 = array.filter((value) => value == array.length / 2);
console.log(ex4);

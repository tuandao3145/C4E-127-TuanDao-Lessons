// bai 1a

// for (let i = 100; i >= 1; i--) {
// 	console.log("số: " + i);
// }

//

// bai 1b

// let T = 0;

// do {
// 	n = prompt("Xin nhập lại n>2: ");
// } while (n <= 2);

// for (let i = 1; i <= n; i++) {
// 	T += 1 / (i + 1);
// }

// console.log("Giá trị của T với n=" + n, "là", T);

//

// bai 2

// do {
// 	n = prompt("Nhập vào n: ");
// 	if (n < 1 || n > 10) {
// 		console.log("Giá trị không hợp lệ");
// 	}
// } while (n < 1 || n > 10);

// for (let i = 1; i <= 10; i++) {
// 	console.log(n, "x", i, "=", n * i);
// }

//

// bai 3

// let m = prompt("Nhập vào m: ");
// let n = prompt("Nhập vào n: ");
// let t = "";
// for (let i = 1; i <= m; i++) {
// 	let row = "";
// 	for (let j = 1; j <= n; j++) {
// 		row += "* ";
// 	}
// 	t += row + "\n";
// }
// console.log(t);
//

// bai 4

// let m = prompt("Nhập vào m: ");
// let t = "";
// for (let i = 1; i <= m; i++) {
// 	let row = "";
// 	for (let j = 1; j <= i; j++) {
// 		row += "* ";
// 	}
// 	t += row + "\n";
// }
// console.log(t);
//

// bai 5

// let m = Math.floor(Math.random() * 10); // get a random integer in range 0-9
// console.log(m);

// do {
// 	n = prompt("Nhập số bạn đoán: ");
// 	if (n != m) {
// 		console.log("Sai rồi, mời đoán lại");
// 	} else {
// 		break;
// 	}
// } while (n != m);
// console.log("Bravo, đoán đúng rồi, số bí ẩn là:", m);

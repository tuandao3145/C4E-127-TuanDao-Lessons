// Bài 1

// Hàm có đầu vào, không có đầu ra

function hello(name) {
	console.log("Xin chào " + name);
}
// hello(Tuan)

// Hàm không có đầu vào, có đầu ra

// let a = 5;
function doubleA() {
	return a * 2;
}
// console.log(doubleA());

// Hàm không có đầu vào, không có đầu ra

// let b = 8;
function reverseB() {
	b = b * -1;
}
// reverseB();
// console.log(b);

// Bài 2a

function uocChungLonNhat(a, b) {
	while (a * b != 0) {
		// lặp cho đến khi nào có 1 số bằng 0
		if (a > b) {
			a %= b; //a mới bằng số dư khi lấy a cũ chia b
			console.log("a mới là: ", a);
		} else {
			b %= a;
			console.log("b mới là: ", b);
		}
	}
	console.log("UCLN là: ", a + b);
	return a + b; // tương đương return a hoặc b, vì khi này đã có 1 trong 2 bằng 0
}

// uocChungLonNhat(105, 80);

// Bài 2b

function triArea(a, b, c) {
	let S;
	if ((a + b < c || a + c < b || b + c < a || a <= 0, b <= 0, c <= 0)) {
		S = null;
	} else {
		let p = (a + b + c) / 2;
		S = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
	}
	console.log(
		"Diện tích tam giác có 3 cạnh a = " +
			a +
			", b = " +
			b +
			", c = " +
			c +
			" là: S = " +
			S
	);
	return S;
}

// triArea(3, 4, 5);

// Bài 2c

function maxOf(...args) {
	// đổi tập hợp các số nhập vào thành 1 argumnet (array-like)
	let n = args.length; // đếm các số cần so sánh bằng cách lấy đếm só phần tử của array nhập vào
	let max = args[0];
	for (let i = 0; i < n; i++) {
		if (args[i] > max) {
			max = args[i];
		}
	}
	console.log(max);
	return max;
}

// maxOf(5, 6, 2134, 6, 23, 423, 4);

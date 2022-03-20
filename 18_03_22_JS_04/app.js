let mayTinhBoTui = {
	name: "fx570",
	price: 200000,
	company: "Casio",
	manufactureDate: "01/01/2022",

	addFunc: function (a, b) {
		let sum = a + b;
		return sum;
	},

	abstractFunc: function (a, b) {
		let diff = a - b;
		return diff;
	},

	multipleFunc: function (a, b) {
		let mul = a * b;
		return mul;
	},

	divideFunc: function (a, b) {
		let quo;
		if (b != 0) {
			quo = null;
		} else {
			quo = a / b;
		}
		return quo;
	},

	degreeEqua: function (a, b, c) {
		let delta = b ** 2 - 4 * a * c;
		let result = [];
		console.log(delta);
		if (delta == 0) {
			result.push(-b / 2 / a);
		} else if (delta > 0) {
			result.push((-b + delta ** 0.5) / 2 / a);
			result.push((-b - delta ** 0.5) / 2 / a);
		}
		return result;
	},

	circlePerimeter: function (r) {
		let P = Math.PI * 2 * r;
		return P;
	},

	weddingDate: function (...args) {
		let a = args[0];
		let b = args[1];
		let start = Date.now();
		let end = new Date("2025-12-31").getTime();
		if (b == null) {
			return null;
		} else {
			let randomNum = Math.random() * (a + b);
			let date = new Date(start + (randomNum / 100) * (end - start));
			return date.toISOString().split("T")[0];
			// toISOString(): unix to string
			// split(): string to array, split by character
		}
	},
};

console.log(mayTinhBoTui.weddingDate(26));

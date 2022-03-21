// truy suất qua ID
let helloWorld = document.getElementById("hello-world");
let goodbyeWorld = document.getElementById("goodbye-world");
let girlFriend = document.getElementById("girl-friend");

// truy xuất qua class
let h1List = document.getElementsByClassName("big-title");
// loop 1 HTML collection
for (item of h1List) {
	console.log(item);
}

// sửa nội dung thẻ
helloWorld.innerHTML = "Holy smoke";
// innerHTML vs textContent: innerHTML sẽ lấy tất cả, text, tag, etc; textContent chỉ lấy text

// sửa style của thẻ
helloWorld.style.color = "white";
helloWorld.style.backgroundColor = "black";

// ex1:
goodbyeWorld.innerHTML = "hahaha";
goodbyeWorld.style.color = "red";
girlFriend.innerHTML = "no girlfriend";
girlFriend.style.backgroundColor = "blue";

// sửa thuộc tính dùng setAttribute, có 2 param, 1 là tên của thuộc tính và 1 là giá trị của thuộc tính đó
let ggLink = document.getElementById("google-link");
ggLink.setAttribute("href", "https://www.youtube.com/");
ggLink.setAttribute("title", "facebook-link-hihi");

// xoá 1 thuộc tính dùng removeAttribute, có 1 param, là tên của thuộc tính cần xoá
ggLink.removeAttribute("title");

// thêm thẻ vào 1 thẻ
let loverList = document.getElementById("lover-list");

// cách thêm 1: innerHTML
// loverList.innerHTML = "<li>Nie</li>" + loverList.innerHTML;

// cách thêm 2: append, có thể nhận vô số param, có thể là string lẫn element; appendChild: chỉ nhận 1 đầu vào
let newLover = document.createElement("li");
newLover.innerHTML = "Niew";
// loverList.appendChild(newLover);
loverList.append(newLover);
// có thể thêm vào đầu bằng prepend, tương tự append

// bắt sự kiện của thẻ
// let catMotion = document.getElementById("cat-motion");
// let src1 =
// 	"https://f45-zpg-r.zdn.vn/2997057090703075565/882cd0123090ffcea681.jpg";
// let src2 =
// 	"https://f48-zpg-r.zdn.vn/8547864246169758216/eaf63fe42069ef37b678.jpg";

// catMotion.onclick = () => {
// 	if (catMotion.getAttribute("alt") == "img1") {
// 		catMotion.setAttribute("alt", "img2");
// 		catMotion.setAttribute(
// 			"src",
// 			"https://f48-zpg-r.zdn.vn/8547864246169758216/eaf63fe42069ef37b678.jpg"
// 		);
// 	} else if (catMotion.getAttribute("alt") == "img2") {
// 		catMotion.setAttribute("alt", "img1");
// 		catMotion.setAttribute(
// 			"src",
// 			"https://f45-zpg-r.zdn.vn/2997057090703075565/882cd0123090ffcea681.jpg"
// 		);
// 	}
// };

let catMotion = document.getElementById("cat-motion");

let src1 =
	"https://f45-zpg-r.zdn.vn/2997057090703075565/882cd0123090ffcea681.jpg";
let src2 =
	"https://f48-zpg-r.zdn.vn/8547864246169758216/eaf63fe42069ef37b678.jpg";

// catMotion.onclick = () => {
// 	catMotion.getAttribute("src") == src1
// 		? catMotion.setAttribute("src", src2)
// 		: catMotion.setAttribute("src", src1);
// };

catMotion.onclick = function () {
	if (catMotion.getAttribute("src") == src1) {
		catMotion.setAttribute("src", src2);
	} else {
		catMotion.setAttribute("src", src1);
	}
};

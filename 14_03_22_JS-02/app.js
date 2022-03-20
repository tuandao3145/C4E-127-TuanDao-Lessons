// let age = prompt('Vui lòng nhập tuổi của bạn: ')

// if (age <= 14) {
// console.log('Bạn chưa đủ tuổi làm CCCD')
// } else if (age <= 22) {
//     console.log('Bạn rất trẻ!')
// } else {
//     console.log('Bạn sắp sửa già!')
// }

// let name = prompt('Nhập tên người yêu: ')

// if (name == 'Ngoc Trinh') {
// console.log('Đây là người yêu của tôi')
// } else if (nagme == 'Tran Duc Bo') {
//     console.log('Đây là bạn của người yêu tôi!')
// } else {
//     console.log('Không biết đây là ai cả')
// }

// let beauty = prompt('Nhập sự xinh gái: ')
// let kindness = prompt('Nhập sự tốt bụng: ')

// if (beauty >= 8 && kindness >= 8) {
//  console.log('Đay là vợ tôi');
// } else if (beauty >=8 && kindness < 8) {
//     console.log('Được cái xinh gái')
// } else if (beauty <8 && kindness >= 8) {
//     console.log('Tốt bụng đấy')
// } else {
//     console.log('Đây không phải là gu người yêu tôi!')
// }

// for (i = 1 ; i <= 100 ; i++ ) {
// console.log('Xin lỗi, được chưa! :v ' + i)
// }

// let sum = 0;

// for (i = 1 ;i < 1000 ; i++) {
//     if (i % 2 == 0) {
//         continue
//     } else {
//         sum += i
//     }
// }

// console.log('Đây là tổng: ' + sum)

// let sum = 0;

// for ( i=1 ; i<=30 ; i++ ) {
//     sum += i;
// }

// for ( i=60 ; i<=100 ; i++ ) {
//     sum += i;
// }

// console.log('Đây là tổng: ' + sum)

let sum = 0;

for (let i = 1; i <= 100; i++) {
	if (i > 30 && i < 60) continue;
	sum += i;
}

console.log("Đây là tổng: " + sum);

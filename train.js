//E-task
//const calculator = (a, r, b) => {
// if (a == undefined || a == NaN || b == undefined || b == NaN) {
//  console.log("not valid to operate");
// }
// if (r === "+") {
//  console.log(a + b);
//} else if (r === "-") {
//  console.log(a - b);
//} else if (r === "/") {
//  if (b == 0) {
//    console.log("not valid to operate");
// } else {
//   console.log(a / b);
//}
//} else if (r === "*") {
//  console.log(a * b);
// }
//};

//const result = calculator(8, "-", 4);

// Callback
// console.log("jack MA maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", //0-20
//   "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "o'zingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bo'lgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq endi", //60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR", err);
//   else {
//     console.log("javobi", data);
//   }
// });
// console.log("passed here1");

// [10] Asynchronous

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }
// then/catch
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here1");

// asyn/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
// }
// run();

// G-task

// const findBig = [4, 12, 5, 9, 12, 3];
// const max = Math.max(...findBig);
// const index = findBig.indexOf(max);
// console.log(index);

// H-Task: Kiritilgan stringni teskari qilib chiqaradigan function tuzing, masalan: reverseString("javascript") return qilishi kerak "tpircsavaj".

let str = "javascript";

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(str));

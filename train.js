//E-task
const calculator = (a, r, b) => {
  if (a == undefined || a == NaN || b == undefined || b == NaN) {
    console.log("not valid to operate");
  }
  if (r === "+") {
    console.log(a + b);
  } else if (r === "-") {
    console.log(a - b);
  } else if (r === "/") {
    if (b == 0) {
      console.log("not valid to operate");
    } else {
      console.log(a / b);
    }
  } else if (r === "*") {
    console.log(a * b);
  }
};

const result = calculator(8, "-", 4);

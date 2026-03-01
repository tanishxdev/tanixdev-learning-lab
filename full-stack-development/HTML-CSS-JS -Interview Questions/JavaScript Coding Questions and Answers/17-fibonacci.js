function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let nextNum;

  for (let i = 1; i <= num; i++) {
    console.log(num1);

    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
}
fibonacci(7);

if (true) {
    var x = 100;      // function scoped → leaks out
    let y = 200;      // block scoped → trapped inside
    const z = 300;
}
console.log(x);       // 100  ← oh no!
console.log(y);       // ReferenceError
console.log(z);       // ReferenceError
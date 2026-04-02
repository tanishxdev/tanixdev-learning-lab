# 🔥 JavaScript Foundation — Interview Drill

*(Questions Only)*

---

## 🧠 THEORY (Conceptual Understanding)

1. What is the difference between a **JavaScript engine** and a **JavaScript runtime**?
2. Why is JavaScript called **single-threaded** even though it handles async operations?
3. What problem was JavaScript originally created to solve in browsers?
4. Why does JavaScript use **garbage collection** instead of manual memory management?
5. What is an **execution context**, and when is it created and destroyed?
6. Why does JavaScript have both **stack memory and heap memory**?
7. Why can JavaScript not directly access the file system in browsers?
8. What is **backward compatibility**, and how does it affect JavaScript evolution?
9. Why was **Node.js** able to scale well despite being single-threaded?
10. What does it mean that JavaScript is **JIT compiled**?

---

## 📦 MEMORY & EXECUTION (Dry-Run Thinking)

11. How many execution contexts are created in the following code?

```js
function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();
```

12. What stays in memory after a function finishes execution?
13. Why does a **closure** prevent certain variables from being garbage collected?
14. What exactly is stored in a **stack frame**?
15. Why does recursive code risk **stack overflow**, but heap memory usually does not?

---

## 🧪 OUTPUT PREDICTION (No Execution)

16. What is the output?

```js
console.log(x);
var x = 10;
```

17. What is the output?

```js
function test() {
  console.log(a);
  var a = 5;
}
test();
```

18. What is the output order?

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");
```

19. What happens here and why?

```js
function foo() {
  foo();
}
foo();
```

20. What is logged and why?

```js
let obj = { x: 1 };
let ref = obj;
obj = null;
console.log(ref.x);
```

---

## 🐞 DEBUGGING & BUG REASONING

21. Why does this code crash in Node.js but work in a browser?

```js
console.log(window.location);
```

22. Why does the browser freeze but not throw an error?

```js
while (true) {}
```

23. Identify the memory leak risk:

```js
setInterval(() => {
  console.log("running");
}, 1000);
```

24. Why is this considered a bad performance pattern?

```js
function add(a, b) {
  return a + b;
}
add(1, 2);
add("1", "2");
```

25. Why does removing a DOM element not always free memory?

---

## ⚙️ SYSTEM & DESIGN THINKING

26. Why did browsers choose **single-threaded JavaScript** instead of multi-threaded?
27. Why does Node.js use an **event-driven model** instead of thread-per-request?
28. Why is JavaScript unsuitable for CPU-heavy workloads?
29. Why does JavaScript allow dynamic typing despite its risks?
30. Why can two JavaScript engines behave slightly differently?

---

## 🎯 BONUS (Senior-Level Thinking)

31. Why does JavaScript not expose garbage collection controls to developers?
32. Why is JavaScript a good choice for GenAI tooling and API orchestration?
33. Why does JavaScript favor **coordination over computation**?
34. Why does blocking the call stack delay async callbacks?
35. Why is understanding the runtime more important than memorizing syntax?

---
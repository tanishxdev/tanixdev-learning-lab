// Closure = function + its lexical environment

function outer() {
  let counter = 0; // private variable
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const fn = outer();

fn();
fn();

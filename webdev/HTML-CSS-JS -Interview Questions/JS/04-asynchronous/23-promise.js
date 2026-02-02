// 4. Creating a Promise

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Something went wrong");
  }
});

// 5. Consuming a Promise (then, catch, finally)
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise completed");
  });

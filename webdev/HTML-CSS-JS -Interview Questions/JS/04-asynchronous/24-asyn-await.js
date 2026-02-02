// 3. async Keyword

async function getData() {
  return "Hi";
}
getData().then(console.log);

// 4. await Keyword

async function getData() {
  return "Hi";
}
async function main() {
  const data = await getData();
  console.log(data);
}
main();

async function fetchData() {
  const data = await Promise.resolve("Data");
  console.log(data);
}

fetchData();
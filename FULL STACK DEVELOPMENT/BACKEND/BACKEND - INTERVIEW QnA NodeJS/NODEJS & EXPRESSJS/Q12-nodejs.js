const https = require("https");

https.get("https://api.github.com/tanishxdev", (res) => {
  res.on("data", (chunk) => {
    console.log("Received chunk:", chunk.toString());
  });

  res.on("end", () => {
    console.log("Response ended");
  });
});

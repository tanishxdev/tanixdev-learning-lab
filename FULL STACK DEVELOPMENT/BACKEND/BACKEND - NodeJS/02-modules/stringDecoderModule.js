const { StringDecoder } = require("string_decoder");

const decoder = new StringDecoder("utf8");

const buffer = Buffer.from("Hello World");

console.log(decoder.write(buffer));

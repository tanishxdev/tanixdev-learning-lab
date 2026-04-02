// Import querystring module
const querystring = require("querystring");

// Example query string
const qs = "name=John&age=30&city=New%20York";

// string -> object
const parsed = querystring.parse(qs);

console.log(parsed);

// object -> string

const stringified = querystring.stringify(parsed);

console.log(stringified);

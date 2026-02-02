const os = require('os');

console.log("OS Info");

console.log("Operating System Info:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory (MB):", os.totalmem() / (1024 * 1024)); // in bytes means divide by 1024 * 1024
console.log("Free Memory (MB):", os.freemem() / (1024 * 1024)); // in bytes means divide by 1024 * 1024
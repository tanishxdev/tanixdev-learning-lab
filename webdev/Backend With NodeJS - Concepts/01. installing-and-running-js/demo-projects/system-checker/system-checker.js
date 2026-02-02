// ===========================
// Mini Project: System Checker
// ===========================

// Import required core modules
const os = require('os');
const path = require('path');

// Get current user and system info
const user = os.userInfo();
const uptime = os.uptime();

// Create a simple report
const report = `
Hello ${user.username}!
Your system has been running for ${(uptime / 3600).toFixed(2)} hours.
You're using a ${os.type()} system on ${os.platform()} platform.
Your home directory path is: ${user.homedir}
`;

console.log(report)
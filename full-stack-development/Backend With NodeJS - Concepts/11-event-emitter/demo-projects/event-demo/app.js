// ===========================
// Example: Basic EventEmitter
// ===========================
console.log(" ⭐ Example: Basic EventEmitter");

const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Register a event listener
emitter.on('greet', (name) => {
    console.log(`Hello ${name}, welcome to EventEmitter!`);
});

// Emit an event
emitter.emit('greet', 'Tanish');

// Output:
// Hello Tanish, welcome to EventEmitter!

// ===========================
// Example: Multiple Listeners
// ===========================
console.log(" ⭐ Example: Multiple Listeners");

// Listener 1
emitter.on('status', () => {
  console.log("Server started successfully...");
});

// Listener 2
emitter.on('status', () => {
  console.log("Database connected...");
});

// Emit event
emitter.emit('status');

// Output:
// Server started successfully...
// Database connected...

// ===========================
// Example: Pass Data and Remove Listener
// ===========================

console.log(" ⭐ Example: Pass Data and Remove Listener");

// Define listener function
const notifyUser = (user, msg) => {
  console.log(`Notification for ${user}: ${msg}`);
};

// Register listener
emitter.on('notify', notifyUser);

// Emit events
emitter.emit('notify', 'Tanish', 'You have a new message.');
emitter.emit('notify', 'Arjun', 'Your upload completed.');

// Remove listener
emitter.removeListener('notify', notifyUser);

// Try emitting again (won’t trigger since removed)
emitter.emit('notify', 'Tanish', 'This will not be logged.');

// ===========================
// Example: Using Custom Event Class
// ===========================
console.log(" ⭐ Example: Using Custom Event Class");

const User = require('./user');

// Create user instance
const user = new User();

// Listen for login and logout events
user.on('login', (name) => console.log(`Welcome, ${name}!`));
user.on('logout', (name) => console.log(`Goodbye, ${name}!`));

// Trigger events
user.login('Tanish');
user.logout('Tanish');

// Output:
// Welcome, Tanish!
// Goodbye, Tanish!
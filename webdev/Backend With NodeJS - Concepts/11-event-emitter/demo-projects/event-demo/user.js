// ===========================
// Custom Class extending EventEmitter
// ===========================

const EventEmitter = require('events');

class User extends EventEmitter {
    login(username) {
        console.log(`${username} logged in`);
        this.emit('login', username);
    }
    logout(username) {
        console.log(`${username} logged out`);
        this.emit('logout', username);
    }
}

module.exports = User;

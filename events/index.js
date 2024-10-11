// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    trigger(eventName, ...args) {
        if (this.events[eventName]) {
            for (let callback of this.events[eventName]) {
                callback(...args); 
            }
        }
    }

    off(eventName) {
        if (this.events[eventName]) {
            delete this.events[eventName];
        }
    }
}

const events = new Events();

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
    console.log(`Goodbye, ${name}!`);
}

events.on('greet', greet);
events.on('goodbye', sayGoodbye);

events.trigger('greet', 'Ismayil');
events.trigger('goodbye', 'Ismayil');

events.off('greet');

events.trigger('greet', 'Ismayil');


module.exports = Events;

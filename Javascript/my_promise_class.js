const fs = require('fs');

class promise {
    constructor(fn) {
        // Store the function but don't execute it yet
        this.fn = fn;
    }

    then(resolve) {
        this.resolve = resolve;
        
        // Now that resolve is set, execute fn
        this.fn((data) => {
            if (this.resolve) {
                this.resolve(data);
            }
        });
    }
}

function readFileAsync(printData) {
    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        printData(data);
    });
}

function printData(data) {
    console.log(data);
}

const p = new promise(readFileAsync);
p.then(printData); // Ensuring resolve is set before execution

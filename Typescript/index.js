"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Manager extends User {
    constructor(name) {
        super(name);
        this.greet = () => {
            return "hello";
        };
        this.name = name;
    }
}

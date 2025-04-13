function caller(callback: () => void) {
    setTimeout(callback, 3000);
}

function hello() {
    console.log("hello");
}

caller(hello);

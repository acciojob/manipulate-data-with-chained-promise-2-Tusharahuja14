let arr = [1, 2, 3, 4];
let output = document.getElementById("output");

// Step 1: Filter out odd numbers
let promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.filter((elem) => elem % 2 === 0);
            output.innerText = arr.join(", "); // Ensure UI updates immediately
            resolve();
        }, 1000);
    });
};

let promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.map((elem) => elem * 2);
            output.innerText = arr.join(", "); // Ensure UI updates again
            resolve();
        }, 2000);
    });
};

// Execute promises in sequence
promise1()
    .then(() => promise2())
    .catch((err) => console.error(err));

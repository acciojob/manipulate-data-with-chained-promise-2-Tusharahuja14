let arr = [1, 2, 3, 4];
let output = document.getElementById("output");

// Initial state of the output
output.innerText = ""; // Clear output on page load

// Step 1: Filter out odd numbers
let promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.filter((elem) => elem % 2 === 0);
            output.innerText = arr.join(", "); // Update UI with even numbers
            resolve(); // Resolve the promise
        }, 1000); // 1-second delay
    });
};

// Step 2: Multiply even numbers by 2
let promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.map((elem) => elem * 2);
            output.innerText = arr.join(", "); // Update UI with multiplied numbers
            resolve(); // Resolve the promise
        }, 2000); // 2-second delay
    });
};

// Execute promises in sequence
promise1()
    .then(() => promise2())
    .catch((err) => console.error(err));

let arr = [1, 2, 3, 4];
let output = document.getElementById("output");

output.innerText = ""; 

// Step 1: Filter out odd numbers
let promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.filter((elem) => elem % 2 === 0);
            output.innerText = arr.join(", "); // Display even numbers
            resolve(); 
        }, 1000); // 1-second delay
    });
};

// Step 2: Multiply even numbers by 2
let promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.map((elem) => elem * 2);
            output.innerText = arr.join(", "); // Display multiplied numbers
            resolve(); 
        }, 2000); // 2-second delay
    });
};

// Execute promises in sequence
promise1()
    .then(() => promise2())
    .catch((err) => console.error(err));

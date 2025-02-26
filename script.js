let arr = [1, 2, 3, 4];
let output = document.getElementById("output");

// Step 1: Filter out odd numbers
let promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.filter((elem) => elem % 2 === 0);
            output.innerText = arr.join(", "); // Display the filtered array
            resolve(); 
        }, 1000); 
    });
};

// Step 2: Multiply even numbers by 2
let promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.map((elem) => elem * 2);
            output.innerText = arr.join(", "); // Display the modified array
            resolve(); 
        }, 2000); 
    });
};

// Execute promises in sequence
promise1()
    .then(() => promise2())
    .catch((err) => console.error(err));

let arr = [1, 2, 3, 4];
let output = document.getElementById("output");

let initialPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    });
};

let filterEvenNumbers = (arr) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.filter(num => num % 2 === 0); // Keep only even numbers
            output.innerText = arr.join(", ");
            resolve(arr);
        }, 1000);
    });
};

let multiplyByTwo = (arr) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.map(num => num * 2); // Multiply even numbers by 2
            output.innerText = arr.join(", ");
            resolve(arr);
        }, 2000);
    });
};

initialPromise()
    .then(filterEvenNumbers)
    .then(multiplyByTwo)
    .catch(err => console.error(err));

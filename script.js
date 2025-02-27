let arr = [1, 2, 3, 4];
let output = document.getElementById("output");


let promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.filter((elem) => elem % 2 === 0);
            output.innerText = arr.join(", "); 
            resolve(); 
        }, 1000); 
    });
};

let promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.map((elem) => elem * 2);
            output.innerText = arr.join(","); 
            resolve(); 
        }, 2000); 
    });
};

promise1()
    .then(() => {
        setTimeout(() => {
            promise2()
        }, 1000);
    })
    .catch((err) => console.error(err));

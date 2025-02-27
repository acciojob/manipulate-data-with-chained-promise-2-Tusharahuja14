let arr = [1, 2, 3, 4];
let output = document.getElementById("output");


let  Firstpromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.filter((elem) => elem % 2 === 0);
            output.innerText = arr.join(", "); 
            resolve(); 
        }, 1000); 
    });
};

let  SecondPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            arr = arr.map((elem) => elem * 2);
            output.innerText = arr.join(","); 
            resolve(); 
        }, 2000); 
    });
};

Firstpromise()
    .then(() => {
        setTimeout(() => {
            SecondPromise()
        }, 1000);
    })
    .catch((err) => console.error(err));

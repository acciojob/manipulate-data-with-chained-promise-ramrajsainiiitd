let output = document.getElementById('output');
let arr = [1,2,3,4];

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let evenArray = arr.filter((item) => item % 2 == 0);
        resolve(evenArray);
    }, 1000);
});

promise1.then((data) => {
    output.textContent = `${data}`;
}).catch((error) => {
    console.log(error);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let multEvenArray = arr.filter((item) => item % 2 == 0)
                           .map((item) => item * 2);
        resolve(multEvenArray);
    }, 2000);
});

promise2.then((data) => {
    output.textContent = `${data}`;
}).catch((error) => {
    console.log(error);
});

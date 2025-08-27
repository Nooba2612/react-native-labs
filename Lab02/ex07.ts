const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2 resolved"), 500);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 resolved"), 1500);
});

// trả về Promise chạy đầu tiên
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
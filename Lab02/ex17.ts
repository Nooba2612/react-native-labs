const promiseArr = [
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
];

(async () => {
    for await (const num of promiseArr) {
        console.log(num);
    }
})();

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4, 5, 6, 7].filter((predicate) => predicate % 2 === 0));
    }, 1000);
});

promise
    .then((result) => {
        console.log("Even numbers array: " + result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

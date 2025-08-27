const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10000000);
    }, 10000);
});

promise.then((result) => {
    console.log(result);
});

const promise = new Promise((resolve, reject) => {
    resolve(Math.random()) 
});

promise.then((result) => {
    console.log(result);
});

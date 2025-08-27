const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});

const asyncFunction = async () => {
    const result = await myPromise;
    console.log(result);
};

asyncFunction();

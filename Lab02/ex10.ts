new Promise((resolve, reject) => {
    resolve("Promise resolved");
}).finally(() => {
    console.log("Done");
});
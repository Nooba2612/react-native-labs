const asyncFunc = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(() => resolve("Promise resolved"), 1000));
};

Promise.all([asyncFunc(), asyncFunc(), asyncFunc()]).then(() => {
    console.log("All promises resolved");
});

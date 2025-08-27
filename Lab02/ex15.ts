const asyncFunc = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Promise resolved");
};

const runAsyncFunctions = async () => {
    await asyncFunc();
    await asyncFunc();
    await asyncFunc();
    await asyncFunc();
};

runAsyncFunctions();

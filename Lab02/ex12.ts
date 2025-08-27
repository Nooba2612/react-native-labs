const simulateTask = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve("Task completed");
    })
}

const asyncFunc = async (): Promise<void> => {
    try {
        const result = await simulateTask();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asyncFunc();
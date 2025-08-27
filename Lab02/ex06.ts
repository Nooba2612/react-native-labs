const simulateAsyncTask = (id: number, delay: number): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} completed`);
        }, delay);
    });
};

const runTasksInParallel = async () => {
    const task1 = simulateAsyncTask(1, 1000);
    const task2 = simulateAsyncTask(2, 2000);
    const task3 = simulateAsyncTask(3, 1500);

    try {
        const results = await Promise.all([task1, task2, task3]);
        console.log('All tasks completed:', results);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

runTasksInParallel();
function asyncTask(id: number, delay: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} completed after ${delay}ms`);
        }, delay);
    });
}

async function queueProcess() {
    const tasks = [
        () => asyncTask(1, 1000),
        () => asyncTask(2, 1500),
        () => asyncTask(3, 500),
        () => asyncTask(4, 2000),
        () => asyncTask(5, 1200),
    ];

    console.log(" Starting queue processing...");

    const results: string[] = [];

    for (const task of tasks) {
        const result = await task();
        console.log(result);
        results.push(result);
    }

    console.log("All tasks finished sequentially:", results);
}

queueProcess();

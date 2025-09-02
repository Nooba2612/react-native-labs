function asyncTask(id: number, delay: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} completed after ${delay}ms`);
        }, delay);
    });
}

async function batchProcess() {
    const tasks = [asyncTask(1, 1000), asyncTask(2, 1500), asyncTask(3, 500), asyncTask(4, 2000), asyncTask(5, 1200)];

    try {
        console.log("Starting batch processing...");
        const results = await Promise.all(tasks);
        console.log("All tasks completed:", results);
    } catch (error) {
        console.error("Error in batch process:", error);
    }
}

batchProcess();

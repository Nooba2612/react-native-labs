async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Attempt ${attempt} to fetch ${url} ...`);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error on attempt ${attempt}:`, error);

            if (attempt === retries) {
                throw new Error(`Failed after ${retries} retries`);
            }

            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
}

(async () => {
    try {
        const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
        console.log("Final data:", data);
    } catch (error) {
        console.error(" All retries failed:", error);
    }
})();

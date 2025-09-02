async function fetchDataFromApis(apiUrls: string[]): Promise<void> {
    try {
        const fetchPromises = apiUrls.map((url) =>
            fetch(url).then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            }),
        );

        const results = await Promise.allSettled(fetchPromises);

        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`API ${index + 1} succeeded:`, result.value);
            } else {
                console.error(`API ${index + 1} failed:`, result.reason);
            }
        });
    } catch (error) {
        console.error("An unexpected error occurred:", error);
    }
}

const apiUrls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/invalid-url",
];

fetchDataFromApis(apiUrls);

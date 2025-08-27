const fetchApi = (timeout: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (timeout > 2000) {
            reject(new Error("Request timed out"));
            return;
        }

        setTimeout(() => {
            resolve("Data fetched");
        }, timeout);
    });
};

fetchApi(3000)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

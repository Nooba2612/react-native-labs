const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 1000)
})

promise
    .then(() => 2)
    .then(num => num * num)
    .then(squared => squared * 2)
    .then(doubled => doubled + 5)
    .then(result => console.log("Final result:", result))
    .catch(error => console.error("Error:", error));
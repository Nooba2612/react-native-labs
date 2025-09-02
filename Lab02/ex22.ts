const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
];

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
  .then(results => {
    console.log("All results:", results);
  })
  .catch(error => console.error("Error:", error));

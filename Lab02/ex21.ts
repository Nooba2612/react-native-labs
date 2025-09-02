fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())  // chuyển dữ liệu về JSON
  .then(data => {
    console.log("Todo:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });

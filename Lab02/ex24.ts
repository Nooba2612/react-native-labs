async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        title: "Hello World",
        body: "This is a test post",
        userId: 1,
      }),
    });

    const data = await response.json();
    console.log("Response from API:", data);
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

postData();

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json(); // Parses the response body as JSON
  console.log(data);
};

fetchData();

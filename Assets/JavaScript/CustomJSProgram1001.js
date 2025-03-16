// Load header
fetch("Links.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load header: " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading header:");
  });

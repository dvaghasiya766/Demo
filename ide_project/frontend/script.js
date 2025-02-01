document.addEventListener("DOMContentLoaded", (event) => {
  var editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    mode: "python",
    lineNumbers: true,
    theme: "dracula", // Applying the Dracula theme
    autoCloseBrackets: true, // Enables auto-closing of brackets
  });

  window.runCode = function () {
    var code = editor.getValue();

    // Debug: Log code for verification
    console.log("Code:", code);

    fetch("http://127.0.0.1:5000/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Debug: Log the response data
        console.log("Response Data:", data);
        document.getElementById("output").textContent = data.output
          ? data.output
          : "No output received.";
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("output").textContent =
          "Error: " + error.message;
      });
  };
});

const form = document.getElementById("classify-form");
const textInput = document.getElementById("text");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    result.textContent = "Classifying...";
    const response = await fetch(`/classify?text=${encodeURIComponent(textInput.value)}`);
    const data = await response.json();
    result.textContent = data;
});

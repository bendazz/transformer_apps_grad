const form = document.getElementById("ask-form");
const textInput = document.getElementById("text");
const resultWithout = document.getElementById("result-without");
const resultWith = document.getElementById("result-with");

async function ask(endpoint, text) {
    const response = await fetch(`${endpoint}?text=${encodeURIComponent(text)}`);
    return await response.json();
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    resultWithout.textContent = "Thinking...";
    resultWith.textContent = "Thinking...";
    const text = textInput.value;
    const [without, withTool] = await Promise.all([
        ask("/ask_without", text),
        ask("/ask_with", text),
    ]);
    resultWithout.textContent = without;
    resultWith.textContent = JSON.stringify(withTool, null, 2);
});

function displayTitles(response) {
  new Typewriter("#titles", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateTitles(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "aa9117065970b0ef2fo4f00f437cba3t";
  let prompt = `User input: Generate 5 hook title ideas about ${userInput.value}`;
  let context =
    "You are a clever marketing copywrite expert. Provide 5 viral hook titles. Display the results in basic HTML directly. Do not use code blocks. Do not include a title for the results. Display the results in paragraph size.  Make sure to follow the user input. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let titleElement = document.querySelector("#titles");
  titleElement.classList.remove("hidden");
  titleElement.innerHTML = `Generating hook titles about ${userInput.value}`;

  axios.get(apiUrl).then(displayTitles);
}

let titleFormElement = document.querySelector("#title-generator-form");
titleFormElement.addEventListener("submit", generateTitles);

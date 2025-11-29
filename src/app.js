function generateTitles(event) {
  event.preventDefault();

  new Typewriter("#titles", {
    strings: "response here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let titleFormElement = document.querySelector("#title-generator-form");
titleFormElement.addEventListener("submit", generateTitles);

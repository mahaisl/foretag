let button = document.querySelector("#darkModeBtn");

console.log(button);

button.addEventListener("click", function () {
  

  let allText = document.querySelectorAll(" h1, h2, h3, h4, p, label, footer" );

  allText.forEach((element) => {
    element.style.color = "white";
  });
  let allSections = document.querySelectorAll("html, nav, body, main, footer, section, class, form");

  allSections.forEach((section) => {
    section.style.background = "black";
  });
});
   
export default function loadHome() {
  const content = document.getElementById("content");

  const div = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Welcome to My Restaurant";

  const text = document.createElement("p");
  text.textContent = "Best food in town.";

  div.appendChild(title);
  div.appendChild(text);

  content.appendChild(div);
}
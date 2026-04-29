export default function loadMenu() {
  const content = document.getElementById("content");

  const div = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const item = document.createElement("p");
  item.textContent = "Burger - ₦3000";

  div.appendChild(title);
  div.appendChild(item);

  content.appendChild(div);
}
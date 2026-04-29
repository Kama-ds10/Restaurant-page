export default function loadContact() {
  const content = document.getElementById("content");

  const div = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Call: 09000000000";

  div.appendChild(title);
  div.appendChild(phone);

  content.appendChild(div);
}
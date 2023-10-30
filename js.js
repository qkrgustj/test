const h2 = document.querySelector("h2");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const num = h2.innerText;
  h2.innerText = Number(num) + 1;
});
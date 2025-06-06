import { t } from "./t.js";

const words = document.querySelectorAll("[data-i18n]");

for (let i = 0; i < words.length; i++) {
  const translation = t(words[i].getAttribute("data-i18n"));
  if (words[i].placeholder === "i18n") {
    words[i].placeholder = translation;
  } else {
    words[i].innerText = translation;
  }
}
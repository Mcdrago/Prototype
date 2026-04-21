const typingText = [
  "Junior Accountant",
  "ACCA Student",
  "Xero Accounting User",
  "Financial Data Specialist"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = typingText[i];

  if (!isDeleting) {
    j++;
  } else {
    j--;
  }

  document.querySelector(".typing").textContent = currentText.substring(0, j);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % typingText.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

/* SCROLL REVEAL */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

import { flashcards } from "./flashcards.js";
   

let currentTopic = [];
let currentIndex = 0;


const flashcardSection = document.getElementById("flashcards");
const card = document.getElementById("card");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progressEl = document.getElementById("progress");


document.querySelectorAll("[data-topic]").forEach(button => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic;
    currentTopic = flashcards[topic];
    currentIndex = 0;
    flashcardSection.classList.remove("hidden");
    flashcardSection.scrollIntoView({ behavior: "smooth" });

    loadFlashcard();
  });
});


card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});


nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentTopic.length;
  loadFlashcard();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentTopic.length) % currentTopic.length;
  loadFlashcard();
});

function loadFlashcard() {

  const cardData = currentTopic[currentIndex];

  questionEl.textContent = cardData.question;
  answerEl.textContent = cardData.answer;

  card.classList.remove("flipped");

  progressEl.textContent =
    `Card ${currentIndex + 1} of ${currentTopic.length}`;
}

// Sample flashcards data
const flashcards = [
  { question: "Which end of the clavicle articulates with the sternum?", answer: "Medial (sternal) end" },
  { question: "Which end articulates with the acromion of the scapula?", answer: "Lateral (acromial) end" },
  { question: "Which surface is smooth and subcutaneous?", answer: "Superior surface" },
  { question: "Which surface has grooves and rough attachments?", answer: "Inferior surface" },
  { question: "Name the ligament attached to the conoid tubercle", answer: "Conoid ligament" },
  { question: "Which of the following bones is the first to begin ossifying in the human body?", answer: "Clavicle" },
  { question: "The clavicle articulates medially with which part of the sternum?", answer: "Manubrium" },
  { question: "What is the shape of the clavicle when viewed from above?", answer: "S-shaped (Double curve)" },
  { question: "Which nerve is at risk of injury during a fracture of the middle third of the clavicle?", answer: "Supraclavicular nerves" },
  { question: "The rough prominence on the inferior surface of the lateral end of the clavicle is the attachment site for the conoid part of which ligament?", answer: "Coracoclavicular ligament" },
  { question: "Which muscle is responsible for depressing the lateral fragment in a midshaft clavicular fracture?", answer: "Pectoralis major" },
  { question: "The medial two-thirds of the clavicle's shaft is generally convex in which direction?", answer: "Anteriorly" },
  { question: "The attachment site for the subclavius muscle is located on the?", answer: "Subclavian groove (Groove for subclavius)" },
  { question: "Which extremity of the clavicle is flatter and articulates with the acromion?", answer: "Lateral (Acromial) extremity" },
  { question: "The clavicle develops primarily through which type of ossification?", answer: "Intramembranous" },
  { question: "The clavicle forms the only bony connection between the upper limb skeleton and which major part of the skeleton?", answer: "Axial skeleton (trunk/vertebral column)" },
  { question: "The prominent clinical sign related to the clavicular defect in Cleidocranial Dysostosis is the ability to perform which abnormal shoulder movement?", answer: "Approximate/touch the shoulders together in front of the chest " },
  { question: "Which major muscle originates on the anterior border of the lateral third of the clavicle?", answer: "Deltoid muscle" },
  { question: "Which muscle inserts on the inferior surface of the middle third of the clavicle, into the subclavian groove?", answer: "Subclavius muscle" },
  { question: "What is the primary genetic cause of Cleidocranial Dysostosis?", answer: "Mutation in the RUNX2 gene" },
  { question: "In a midshaft clavicular fracture, which muscle is primarily responsible for the upward displacement of the medial fragment?", answer: "Sternocleidomastoid" },
  { question: "The nutrient foramen of the clavicle is typically directed in which direction?", answer: "Laterally" },
  { question: "The strong ligament binding the clavicle to the first rib's costal cartilage is the?", answer: "Costoclavicular ligament" },
  { question: "The medial epiphysis of the clavicle is unique because it is the?", answer: "Last epiphysis in the body to fuse" },
  { question: "The pulsation of which major artery can be palpated just inferior to the medial part of the clavicle?", answer: "Subclavian artery" },
  { question: "Which major neurovascular structures pass through the space between the clavicle and the first rib (thoracic outlet)?", answer: "Subclavian artery and Brachial plexus trunks" },
  { question: "The conoid tubercle and trapezoid line are points of attachment for parts of which single ligament?", answer: "Coracoclavicular ligament" },
  { question: "In an anterior dislocation of the sternoclavicular joint, which vital structure lying immediately posterior is at risk?", answer: "Brachiocephalic (Innominate) vein" },
  { question: "Which muscle attaches to the superior surface of the lateral third of the clavicle?", answer: "Deltoid" },
  { question: "The sternoclavicular joint is structurally classified as what type of joint?", answer: "Saddle joint (Functionally modified to a ball-and-socket)" },
  { question: "In a newborn, a clavicular fracture most commonly occurs at the junction of the?", answer: "Medial two-thirds and the lateral one-third" },
  { question: "What is the primary characteristic observed in a Type III acromioclavicular (AC) joint separation?", answer: "Upward riding of the clavicle, creating a 'step-off' deformity" },
  { question: "Thoracic Outlet Syndrome (TOS) caused by skeletal compression most likely occurs between which two structures related to the clavicle?", answer: "Clavicle and the first rib" },
  { question: "Which part of the clavicle is the last portion to fuse, often remaining unfused until around 25-30 years of age?", answer: "Medial epiphysis (Sternal end)" },
  { question: "Congenital absence of part or all of the clavicle is a classic feature of which genetic condition?", answer: "Cleidocranial dysostosis (or Dysplasia)" },
  { question: "The sternoclavicular joint is the only true articulation between the upper limb and axial skeleton. It is stabilized primarily by the?", answer: "Costoclavicular ligament" },
  { question: "During movement of the arm, the clavicle rotates posteriorly during which phase?", answer: "Full elevation/abduction (above 90 degrees)" },
  { question: "Which ligament prevents superior displacement of the clavicle relative to the acromion?", answer: "Coracoclavicular ligament (Trapezoid and Conoid parts)" },
  { question: "Which part of the clavicle is generally the weakest point and most susceptible to fracture?", answer: "Junction of the medial two-thirds and lateral one-third" },
  { question: "Which major nerve passes superior to the clavicle, supplying the skin over the shoulder and chest?", answer: "Supraclavicular nerve" }

];

let currentIndex = 0;


const flashcardSection = document.getElementById("flashcards");
const card = document.getElementById("card");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const startBtn = document.querySelector('a[href="#flashcards"]');
const flipInner = card.querySelector('.flip-card-inner');
const progressEl = document.getElementById("progress");


startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  flashcardSection.classList.remove("hidden");
  flashcardSection.scrollIntoView({ behavior: "smooth" });
  loadFlashcard();
});


function loadFlashcard() {
  questionEl.textContent = flashcards[currentIndex].question;
  answerEl.textContent = flashcards[currentIndex].answer;
  flipInner.classList.remove("flipped");
}


card.addEventListener("click", () => {
  flipInner.classList.toggle("flipped");
});


nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  loadFlashcard();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  loadFlashcard();
});

function loadFlashcard() {
  questionEl.textContent = flashcards[currentIndex].question;
  answerEl.textContent = flashcards[currentIndex].answer;
  flipInner.classList.remove("flipped");
  
  
  progressEl.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;
}

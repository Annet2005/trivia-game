const questions = [
    "What is Annet’s favorite beverage (tea, coffee, milk)?",
    "What is Annet’s favorite comforting food (Noodles, Biriyani, Chicken roll)?",
    "What is one thing that always makes Annet smile (accessory, food, pets)?",
    "What kind of person is Annet (introvert, extrovert, both)?",
    "What is Annet’s favorite place (mountains, beach, waterfall)?"
];

];

const answers = ["coffee", "biriyani", "pets", "both", "waterfall"];

let index = 0;
let score = 0;

// DOM Elements
const questionBox = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");
const scoreBox = document.getElementById("score");

questionBox.textContent = questions[index];

submitBtn.addEventListener("click", () => {
    const userAns = answerInput.value.trim().toLowerCase();

    if (userAns === answers[index]) {
        score++;
    }

    index++;
    answerInput.value = ""; // clear input

    if (index < questions.length) {
        questionBox.textContent = questions[index];
    } else {
        showFinalScore();
    }
});

function showFinalScore() {
    // Hide question and input
    questionBox.style.display = "none";
    answerInput.style.display = "none";
    submitBtn.style.display = "none";

    // Show score
    scoreBox.style.display = "block";
    scoreBox.innerHTML = `Your Final Score: <b>${score}/${questions.length}</b>`;
}


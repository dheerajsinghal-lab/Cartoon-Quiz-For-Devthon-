const questions = [
    {
        question: "Which cartoon character is known for his catchphrase, “What’s up, doc ?”",
        answers: [
            { text: "Mickey Mouse", correct: false },
            { text: "Bugs Bunny", correct: true },
            { text: "SpongeBob SquarePants", correct: false },
            { text: "Tom Cat", correct: false }
        ]
    },
    {
        question: "In the cartoon series “The Flintstones,” what is the name of Fred Flintstone’s best friend?",
        answers: [
            { text: "Barney Rubble", correct: true },
            { text: "George Jetson", correct: false },
            { text: "Scooby-Doo", correct: false },
            { text: "Yogi Bear", correct: false }
        ]
    },
    {
        question: "Which cartoon character lives in a pineapple under the sea?",
        answers: [
            { text: "Mickey Mouse", correct: false },
            { text: "Bugs Bunny", correct: false },
            { text: "SpongeBob SquarePants", correct: true },
            { text: "Tom Cat", correct: false }
        ]
    },
    {
        question: "What is the name of the cartoon cat who is always chasing after a clever mouse?",
        answers: [
            { text: "Garfield", correct: false },
            { text: "Sylvester", correct: false },
            { text: "Tom", correct: true },
            { text: "Jerry", correct: false }
        ]
    },
    {
        question: "Who is the main character in the cartoon series “Pokémon”?",
        answers: [
            { text: "Pikachu", correct: false },
            { text: "Ash Ketchum", correct: true },
            { text: "Squidward Tentacles", correct: false },
            { text: "SpongeBob SquarePants", correct: false }
        ]
    },
    {
        question: "What is the name of the cartoon family that lives in Springfield?",
        answers: [
            { text: "The Jetsons", correct: false },
            { text: "The Flintstones", correct: false },
            { text: "The Simpsons", correct: true },
            { text: "The Griffins", correct: false }
        ]
    },
     {
        question: "Which cartoon character is known for his spinach-powered strength?",
        answers: [
            { text: "Popeye", correct: true },
            { text: "Bugs Bunny", correct: false },
            { text: "Mickey Mouse", correct: false },
            { text: "Shaggy Rogers", correct: false }
        ]
    },
    {
        question: "In the cartoon series “Scooby-Doo,” what is the name of the talking Great Dane?",
        answers: [
            { text: "Fred", correct: false },
            { text: "Shaggy", correct: false },
            { text: "Scooby-Doo", correct: true },
            { text: "Scrappy-Doo", correct: false }
        ]
    },
    {
       question: "Which cartoon character is a sailor and has a girlfriend named Olive Oyl?",
        answers: [
            { text: "Mickey Mouse", correct: false },
            { text: "Popeye", correct: true },
            { text: "Bugs Bunny", correct: false },
            { text: "Tom Cat", correct: false }
       ]
    },
    {
        question: "Who is the antagonist in the cartoon series “Tom and Jerry”?",
        answers: [
            { text: "Tom", correct: true },
            { text: "Jerry", correct: false },
            { text: "Spike", correct: false },
            { text: "Butch", correct: false }
        ]
    },
    {
        question: "What is the name of the cartoon superhero who wears a red cape and blue tights?",
        answers: [
            { text: "Batman", correct: false },
            { text: "Superman", correct: true },
            { text: "Spider-Man", correct: false },
             { text: "Iron Man", correct: false }
        ]
    },
     {
        question: "In the cartoon series “The Powerpuff Girls,” who is the leader of the trio?",
        answers: [
            { text: "Blossom", correct: true },
            { text: "Bubbles", correct: false },
            { text: "Buttercup", correct: false },
            { text: "Mojo Jojo", correct: false }
        ]
    },
    {
        question: "Which cartoon character lives in Jellystone Park and loves picnic baskets?",
        answers: [
            { text: "Yogi Bear", correct: true },
            { text: "Winnie the Pooh", correct: false },
            { text: "Garfield", correct: false },
            { text: "Scooby-Doo", correct: false }
        ]
    },
   {
       question: "What is the name of the cartoon character who is always trying to catch the Road Runner?",
        answers: [
            { text: "Wile E. Coyote", correct: true },
            { text: "Daffy Duck", correct: false },
             { text: "Porky Pig", correct: false },
            { text: "Elmer Fudd", correct: false }
        ]
    },
   {
       question: "Who is the main villain in the cartoon series “Teenage Mutant Ninja Turtles”?",
        answers: [
            { text: "Shredder", correct: true },
            { text: "Krang", correct: false },
            { text: "Splinter", correct: false },
            { text: "Bebop", correct: false }
        ]
    },
    {
        question: "What is the name of the cartoon character who lives in Jellystone Park and wears a hat and tie?",
         answers: [
            { text: "Yogi Bear", correct: false },
            { text: "Fred Flintstone", correct: false },
            { text: "George Jetson", correct: false },
            { text: "Top Cat", correct: true }
        ]
    },
  {
        question: "Which cartoon character is a mischievous troublemaker with a distinctive laugh?",
        answers: [
            { text: "Pink Panther", correct: false },
            { text: "Wile E. Coyote", correct: false },
            { text: "The Grinch", correct: true },
             { text: "The Joker", correct: false }
        ]
    },
    {
        question: "In the cartoon series “Looney Tunes,” who is the fastest-running character?",
        answers: [
           { text: "Bugs Bunny", correct: false },
            { text: "Road Runner", correct: true },
            { text: "Speedy Gonzales", correct: false },
            { text: "Tweety Bird", correct: false }
        ]
    },
  {
        question: "What is the name of the cartoon character who lives in a pineapple under the sea and works at the Krusty Krab?",
         answers: [
           { text: "Squidward Tentacles", correct: false },
            { text: "Patrick Star", correct: false },
            { text: "Mr. Krabs", correct: false },
            { text: "SpongeBob SquarePants", correct: true }
        ]
    },
    {
        question: "Who is the main character in the cartoon series “Arthur”?",
        answers: [
             { text: "Arthur Read", correct: true },
            { text: "SpongeBob SquarePants", correct: false },
             { text: "Tom Cat", correct: false },
            { text: "Scooby-Doo", correct: false }
        ]
    },
     {
        question: "Which cartoon character is known for his catchphrase, “Oh, bother”?",
        answers: [
            { text: "Winnie the Pooh", correct: true },
            { text: "Mickey Mouse", correct: false },
            { text: "Garfield", correct: false },
           { text: "Bugs Bunny", correct: false }
        ]
    },
     {
        question: "In the cartoon series “The Jetsons,” what is the name of the family’s robot maid?",
        answers: [
            { text: "Rosie", correct: true },
            { text: "Jane", correct: false },
             { text: "Judy", correct: false },
           { text: "Elroy", correct: false }
        ]
    },
    {
       question: "Who is the main character in the cartoon series “Dora the Explorer”?",
        answers: [
            { text: "Boots", correct: false },
            { text: "Swiper", correct: false },
            { text: "Dora", correct: true },
             { text: "Diego", correct: false }
        ]
    },
    {
        question: "What is the name of the cartoon character who lives in a pineapple under the sea and is best friends with a starfish?",
        answers: [
             { text: "Patrick Star", correct: true },
            { text: "Squidward Tentacles", correct: false },
            { text: "Plankton", correct: false },
            { text: "SpongeBob SquarePants", correct: false }
        ]
    },
    {
       question: "Which cartoon character is a blue hedgehog with super speed?",
        answers: [
            { text: "Sonic the Hedgehog", correct: true },
            { text: "Pikachu", correct: false },
            { text: "Bugs Bunny", correct: false },
            { text: "Woody Woodpecker", correct: false }
        ]
    },
    {
        question: "In the cartoon series “The Rugrats,” who is the oldest child in the group?",
        answers: [
             { text: "Chuckie", correct: false },
           { text: "Tommy", correct: false },
           { text: "Angelica", correct: true },
            { text: "Phil", correct: false }
        ]
    },
    {
       question: "What is the name of the cartoon character who lives in a pineapple under the sea and is employed as a fry cook?",
       answers: [
            { text: "Mr. Krabs", correct: false },
            { text: "Squidward Tentacles", correct: false },
            { text: "Plankton", correct: false },
            { text: "SpongeBob SquarePants", correct: true }
        ]
    },
    {
        question: "Who is the main antagonist in the cartoon series “Inspector Gadget”?",
         answers: [
            { text: "Dr. Claw", correct: true },
           { text: "Penny", correct: false },
            { text: "Brain", correct: false },
            { text: "Chief Quimby", correct: false }
        ]
    },
   {
        question: "Which cartoon character is known for his iconic laugh and green attire?",
        answers: [
           { text: "The Joker", correct: false },
            { text: "Shaggy Rogers", correct: false },
             { text: "Robin Hood", correct: false },
            { text: "Kermit the Frog", correct: true }
       ]
    },
    {
        question: "In the cartoon series “The Simpsons,” what is the name of the family’s baby?",
        answers: [
             { text: "Maggie", correct: true },
            { text: "Lisa", correct: false },
            { text: "Bart", correct: false },
            { text: "Marge", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    quizQuestions = selectRandomQuestions(5);
    showQuestion();
}

function selectRandomQuestions(numQuestions) {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numQuestions);
}

function showQuestion() {
    resetState();
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${quizQuestions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizQuestions.length) {
       handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

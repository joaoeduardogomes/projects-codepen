const cinemaQuestions = [
    "What's your favorite movie of all time?",
    "Which movie reminds you of your childhood?",
    "What's a movie that always makes you cry?",
    "If you could be any movie character, who would it be and why?",
    "What's your favorite movie genre?",
    "What's a movie you've seen more than 10 times?",
    "What's a movie that you think everyone should watch?",
    "What's your favorite movie soundtrack?",
    "What's the most memorable movie scene you've ever seen?",
    "What's your favorite movie quote?",
    "What's the first movie you saw in a theater?",
    "What's your favorite movie villain?",
    "What's your favorite movie hero?",
    "What's your favorite movie love story?",
    "What's your favorite movie friendship?",
    "What's your favorite movie from the 1990s?",
    "What's your favorite movie from the 2000s?",
    "What's your favorite movie from the 2010s?",
    "What's your favorite movie from the 2020s?",
    "What's your favorite movie that was based on a book?",
    "What's your favorite movie that was based on a video game?",
    "What's your favorite movie that was based on a comic book?",
    "What's your favorite movie that was based on a true story?",
    "What's your favorite foreign language movie?",
    "What's your favorite animated movie?",
    "What's your favorite documentary movie?",
    "What's your favorite movie that you saw recently?",
    "What's your favorite movie that you haven't seen yet?",
    "What's your favorite movie that you've seen recently and would recommend to others?",
    "What's your favorite movie that you've seen recently and would not recommend to others?",
    "What's your favorite movie that you've seen recently and would like to see again?",
    "What's your favorite movie that you've seen recently and would not like to see again?",
    "What's your favorite movie that you've seen recently and would like to see in a different language?",
    "What's your favorite movie that you've seen recently and would like to see with a different cast?",
    "What's your favorite movie that you've seen recently and would like to see with a different director?",
    "What's your favorite movie that you've seen recently and would like to see with a different ending?",
    "What's your favorite movie that you've seen recently and would like to see with a different soundtrack?",
    "What's your favorite movie that you've seen recently and would like to see with a different setting?",
    "What's your favorite movie that you've seen recently and would like to see with a different time period?",
    "What's your favorite movie that you've seen recently and would like to see with a different genre?",
    "What's your favorite movie that you've seen recently and would like to see with a different style?",
    "What's your favorite movie that you've seen recently and would like to see with a different tone?",
    "What's your favorite movie that you've seen recently and would like to see with a different theme?",
    "What's your favorite movie that you've seen recently and would like to see with a different message?",
    "What's your favorite movie that you've seen recently and would like to see with a different plot?",
    "What's your favorite movie that you've seen recently and would like to see with a different ending?",
    "What's your favorite movie that you've seen recently and would like to see with a different resolution?"
];

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * cinemaQuestions.length);

    const randomQuestion = cinemaQuestions[randomIndex];

    showRandomQuestion(randomQuestion);
};

function showRandomQuestion(question) {
    const questionParagraph = document.getElementById("questionParagraph");
    questionParagraph.textContent = question;
    questionParagraph.classList.add("p-3");
};

const btn = document.getElementById("btn");
btn.addEventListener("click", generateQuestion);
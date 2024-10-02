const possibleResponses = [
    { answer: "Yes, definitely!", type: "good" },
    { answer: "Most likely.", type: "good" },
    { answer: "Outlook good.", type: "good" },
    { answer: "Signs point to yes.", type: "good" },
    { answer: "Without a doubt.", type: "good" },
    { answer: "Ask again later.", type: "neutral" },
    { answer: "Cannot predict now.", type: "neutral" },
    { answer: "Concentrate and ask again.", type: "neutral" },
    { answer: "Reply hazy, try again.", type: "neutral" },
    { answer: "It is uncertain.", type: "neutral" },
    { answer: "Don't count on it.", type: "bad" },
    { answer: "My sources say no.", type: "bad" },
    { answer: "Outlook not so good.", type: "bad" },
    { answer: "Very doubtful.", type: "bad" },
    { answer: "Perhaps you should ask a different question.", type: "neutral" },
    { answer: "The answer is blowing in the wind.", type: "neutral" },
    { answer: "I'm still learning, try again later.", type: "neutral" },
    { answer: "The stars are not aligned for this question.", type: "neutral" },
    { answer: "I'm not sure, but I think the answer is yes.", type: "good" },
    { answer: "I'm not sure, but I think the answer is no.", type: "bad" }
];

function getAnswer() {
    const randomIndex = Math.floor(Math.random() * possibleResponses.length);
    const answer = possibleResponses[randomIndex];
    
    const answerParagraph = document.getElementById("answerParagraph");
    answerParagraph.textContent = answer.answer;

    answerParagraph.classList.add("p-2");

    if (answer.type === "good") {
        answerParagraph.classList.add("has-text-success");
        answerParagraph.classList.remove("has-text-danger");
        answerParagraph.classList.remove("has-text-info");
    }
    if (answer.type === "bad") {
        answerParagraph.classList.add("has-text-danger");
        answerParagraph.classList.remove("has-text-success");
        answerParagraph.classList.remove("has-text-info");
    }
    if (answer.type === "neutral") {
        answerParagraph.classList.add("has-text-info");
        answerParagraph.classList.remove("has-text-success");
        answerParagraph.classList.remove("has-text-danger");
    }
};

const btn = document.getElementById("btn");
btn.addEventListener("click", getAnswer);
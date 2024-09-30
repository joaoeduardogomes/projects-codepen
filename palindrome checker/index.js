function getText() {
    const text = document.querySelector("#string").value.trim();

    if (text.length < 1) {
        alert("Please insert a valid text.");
        return;
    };

    return text.toLowerCase();
};

function cleanText(text) {
    const specialChars = {
        'á': 'a',
        'à': 'a',
        'ã': 'a',
        'é': 'e',
        'ê': 'e',
        'í': 'i',
        'ó': 'o',
        'ô': 'o',
        'ú': 'u',
    };
        
    text = text.replace(/[\s.,;:?!’'"]+/g, "");

    for (let char in specialChars) {
        text = text.replace(new RegExp(char, "g"), specialChars[char]);
    };
    
    return text;
};


function showResult(isPalindrome) {
    const result = document.querySelector("p#result");
    result.textContent = "";
    result.classList.remove("yes", "no");

    if(isPalindrome) {
        result.textContent = "Yes, it's a palindrome!";
        result.classList.add("yes");
        return;
    }

    result.textContent = "No, it's not a palindrome.";
    result.classList.add("no");
};

function checkPalindrome() {
    const initialText = getText();

    if(!initialText) return;
    
    const cleanedText = cleanText(initialText);
    const reversedText = cleanedText.split("").reverse().join("");

    console.log(cleanedText);
    console.log(reversedText);
    console.log(cleanedText.length)
    console.log(cleanedText == reversedText);
    showResult(cleanedText == reversedText);
};

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

const button = document.querySelector("button#btn");
button.addEventListener("click", checkPalindrome);
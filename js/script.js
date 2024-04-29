const translations = {
    en: {
        greeting: "Hello",
        farewell: "Goodbye"
        // Add more translations as needed
    },
    es: {
        greeting: "Hola",
        farewell: "Adiós"
        // Add more translations as needed
    },
    fr: {
        greeting: "Bonjour",
        farewell: "Au revoir"
        // Add more translations as needed
    }
    // Add more languages and translations as needed
};

function translateText() {
    const sourceText = document.getElementById('sourceText').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    if (translations[targetLanguage]) {
        const translatedText = translate(sourceText, targetLanguage);
        document.getElementById('translatedText').innerText = translatedText;
    } else {
        alert("Translation for selected language not available.");
    }
}

function translate(text, targetLanguage) {
    const translatedTexts = translations[targetLanguage];
    const words = text.split(" ");
    let translatedText = "";

    words.forEach(word => {
        if (translatedTexts[word]) {
            translatedText += translatedTexts[word] + " ";
        } else {
            translatedText += word + " ";
        }
    });

    return translatedText.trim();
}
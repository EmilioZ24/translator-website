function translateText() {
    const sourceText = document.getElementById('sourceText').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    // Replace 'YOUR_API_KEY' with your actual Google Cloud Translation API key
    const apiKey = '82e5a2ae30msh29158d156205fb3p120b0cjsn52b5e7ab1596';
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const data = {
        q: sourceText,
        target: targetLanguage
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const translatedText = data.data.translations[0].translatedText;
        document.getElementById('translatedText').innerText = translatedText;
    })
    .catch(error => console.error('Error:', error));
}
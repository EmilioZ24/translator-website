// Function to translate text
function translateText(text) {
    // Replace YOUR_API_KEY with your actual API key
    const apiKey = "b3aef2821ef24fab5ca9";
    const url = `;

    const data = {
      q: text,
      source: "en",
      target: "fr"
    };

    $.post(url, data, function(response) {
      const translatedText = response.data.translations[0].translatedText;
      $("#translationResult").text(translatedText);
    });
  }

  // Translate button click event
  $("#translateButton").click(function() {
    const inputText = $("#inputText").val();
    translateText(inputText);
  });
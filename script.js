fetch('https://icanhazdadjoke.com/slack')
     .then(data => data.json())
     .then(jockData => {
         const jockText = jockData.attachments[0].text;
         const jokeElement = document.getElementById('jock');
         jokeElement.innerHTML = jockText;
     })
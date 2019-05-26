const words = document.querySelector('.words');
let p = document.createElement('p');
words.appendChild(p);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'ru-Ru';

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0].transcript)
    .join('');

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);

    if (transcript.includes('еркебулан')) {
      console.log('+unicorn');
    }
  }
});

recognition.addEventListener('end', recognition.start);
recognition.start();

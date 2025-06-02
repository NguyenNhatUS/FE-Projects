const containerElement = document.querySelector('.container');

const careers = ['fresh man at HCMUS','Youtuber', 'Web developer', 'Java Developer'];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerElement.innerHTML = `<h1>Iam ${careers[careerIndex].slice(0, 1) === 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  if(characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if(careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 40);
}


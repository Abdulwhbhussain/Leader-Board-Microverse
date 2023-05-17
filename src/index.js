// Leader Board Microverse Main Page
import './index.css';
import headerTitle from './modules/header-title/header-title';
import leftBlock from './modules/left-block/left-block';
import rightBlock from './modules/right-block/right-block';

const app = () => {
  const mainPage = document.getElementsByTagName('div')[0];
  mainPage.classList.add('main-page');

  const blocksContainer = document.createElement('div');
  blocksContainer.classList.add('blocks-container');
  blocksContainer.appendChild(leftBlock());
  blocksContainer.appendChild(rightBlock());

  mainPage.appendChild(headerTitle());
  mainPage.appendChild(blocksContainer);
};

app();

document
  .getElementsByClassName('right-block-form')[0]
  .addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your score function is in development, please try again later.');
    // const name = document.getElementById('name').value;
    // const score = document.getElementById('score').value;
    // const data = { user: name, score: parseInt(score, 10) };
    // const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8qLJ9Y8d1qKjQsH9QZ2p/scores/';
    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: { 'Content-type': 'application/json; charset=UTF-8' },
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     if (json.result === 'Leaderboard score created correctly.') {
    //       document.getElementById('name').value = '';
    //       document.getElementById('score').value = '';
    //       alert('Your score was added correctly!');
    //     } else {
    //       alert('There was an error adding your score, please try again.');
    //     }
    //   });
  });

document
  .getElementsByClassName('left-block-button')[0]
  .addEventListener('click', () => {
    alert('Your refresh function is in development, please try again later.');
    // const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8qLJ9Y8d1qKjQsH9QZ2p/scores/';
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     const scores = json.result;
    //     const scoresList = document.getElementsByClassName('left-block-list')[0];
    //     scoresList.innerHTML = '';
    //     scores.forEach((score) => {
    //       const scoreItem = document.createElement('li');
    //       scoreItem.classList.add('left-block-list-item');
    //       scoreItem.innerHTML = `${score.user}: ${score.score}`;
    //       scoresList.appendChild(scoreItem);
    //     });
    //   });
  });

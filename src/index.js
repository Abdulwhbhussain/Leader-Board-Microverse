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

const gameIdRequest = async () => {
  const url =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const data = { name: 'Leader Board of Microverse Game' };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const json = await response.json();
  const gam_id = json.result.split(' ')[3];

  return gam_id;
};

const postGameScore = async (url, name, score) => {
  const data = { user: name, score: score };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const json = await response.json();

  const result = json.result;

  return result;
};

document.addEventListener('DOMContentLoaded', async () => {
  app();

  let game_id = '';
  if (localStorage.getItem('game_id')) {
    game_id = JSON.parse(localStorage.getItem('game_id'));
  } else {
    game_id = await gameIdRequest();
    localStorage.setItem('game_id', JSON.stringify(game_id));
  }

  const urlToPostAndGet = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${game_id}/scores/`;

  document
    .getElementsByClassName('right-block-form')[0]
    .addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;

      const score =
        document.getElementById('score').value < 0 ||
        document.getElementById('score').value > 100
          ? alert('Your score must be between 0 and 100')
          : document.getElementById('score').value;
      if (score === undefined) return;

      const result = await postGameScore(urlToPostAndGet, name, score);
      if (result === 'Leaderboard score created correctly.') {
        document.getElementById('name').value = '';
        document.getElementById('score').value = '';
        alert('Your score was added correctly!');
        return;
      } else {
        alert('There was an error adding your score, please try again.');
        return;
      }
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
});

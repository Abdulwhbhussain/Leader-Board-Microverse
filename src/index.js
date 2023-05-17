// Leader Board Microverse Main Page
import './index.css';
import headerTitle from './modules/header-title/header-title';
import leftBlock from './modules/left-block/left-block';
import rightBlock from './modules/right-block/right-block';

const game_name = 'Leader Board of Microverse Game';
const game_id = 'Zyge2Wfio2c1GwGRvMJj';
const game = {
  name: game_name,
  id: game_id,
  description: 'This is a Leader Board of Microverse Game created by Wahab!',
};

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

const getGameScore = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  const scores = json.result;

  return scores;
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
  localStorage.setItem('game', JSON.stringify(game));

  app();

  const urlToPostAndGet = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${game_id}/scores/`;

  const scores = await getGameScore(urlToPostAndGet);
  console.log(scores);

  const scoresList = document.getElementsByClassName('left-block-list')[0];
  scoresList.innerHTML = '';
  scores.forEach((score) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('left-block-list-item');
    scoreItem.innerHTML = `${score.user} : ${score.score}`;
    scoresList.appendChild(scoreItem);
  });

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
      } else {
        alert('There was an error adding your score, please try again.');
      }
    });

  document
    .getElementsByClassName('left-block-button')[0]
    .addEventListener('click', async () => {
      const scores = await getGameScore(urlToPostAndGet);
      console.log(scores);

      const scoresList = document.getElementsByClassName('left-block-list')[0];
      scoresList.innerHTML = '';
      scores.forEach((score) => {
        const scoreItem = document.createElement('li');
        scoreItem.classList.add('left-block-list-item');
        scoreItem.innerHTML = `${score.user} : ${score.score}`;
        scoresList.appendChild(scoreItem);
      });
    });
});

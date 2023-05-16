// Show Recent Scores
import './left-block.css';

const leftBlock = () => {
  const leftBlock = document.createElement('div');
  leftBlock.classList.add('left-block');

  const leftBlockTitle = document.createElement('h2');
  leftBlockTitle.classList.add('left-block-title');
  leftBlockTitle.innerHTML = 'Recent Scores';

  const leftBlockButton = document.createElement('button');
  leftBlockButton.classList.add('left-block-button');
  leftBlockButton.innerHTML = 'Refresh';

  const leftBlockList = document.createElement('ul');
  leftBlockList.classList.add('left-block-list');
  leftBlockList.innerHTML = `
  <li class="left-block-list-item">Player 1: 100</li>
  <li class="left-block-list-item">Player 2: 80</li>
  <li class="left-block-list-item">Player 3: 70</li>
  <li class="left-block-list-item">Player 4: 65</li>
  <li class="left-block-list-item">Player 5: 60</li>
  <li class="left-block-list-item">Player 6: 55</li>
  <li class="left-block-list-item">Player 7: 50</li>
  `;

  leftBlock.appendChild(leftBlockTitle);
  leftBlock.appendChild(leftBlockButton);
  leftBlock.appendChild(leftBlockList);

  return leftBlock;
};

export default leftBlock;

// Leader Board Microverse Main Page
import './index.css';
import headerTitle from './modules/header-title/header-title';
import leftBlock from './modules/left-block/left-block';
import rightBlock from './modules/right-block/right-block';

const app = () => {
  const mainPage = document.createElement('div');
  mainPage.classList.add('main-page');

  // const blocksContainer = document.createElement('div');
  // blocksContainer.classList.add('blocks-container');
  // blocksContainer.appendChild(leftBlock());
  // blocksContainer.appendChild(rightBlock());

  mainPage.appendChild(headerTitle());
  // mainPage.appendChild(blocksContainer);
  mainPage.appendChild(leftBlock());
  mainPage.appendChild(rightBlock());
  document.body.appendChild(mainPage);
};

app();

// Leader Board Microverse Main Page
import './index.css';
import headerTitle from './modules/header-title/header-title';
import leftBlock from './modules/left-block/left-block';
import rightBlock from './modules/right-block/right-block';

const app = () => {
  const mainPage = document.createElement('div');
  mainPage.classList.add('main-page');

  mainPage.appendChild(headerTitle());
  mainPage.appendChild(leftBlock());
  mainPage.appendChild(rightBlock());
  document.body.appendChild(mainPage);
};

app();

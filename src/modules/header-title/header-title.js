// Header Title Leader Board
import './header-title.css';

const headerTitle = () => {
  const headerTitle = document.createElement('div');
  headerTitle.classList.add('header-title');

  const headerTitleText = document.createElement('h1');
  headerTitleText.classList.add('header-title-text');
  headerTitleText.innerHTML = 'Leaderboard';

  headerTitle.appendChild(headerTitleText);

  return headerTitle;
};

export default headerTitle;

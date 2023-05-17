// Add you Score to the Leader Board
import './right-block.css';

const rightBlock = () => {
  const rightBlock = document.createElement('div');
  rightBlock.classList.add('right-block');

  const rightBlockTitle = document.createElement('h2');
  rightBlockTitle.classList.add('right-block-title');
  rightBlockTitle.innerHTML = 'Add your Score';

  const rightBlockForm = document.createElement('form');
  rightBlockForm.classList.add('right-block-form');
  rightBlockForm.innerHTML = `
    <input type="text" name="name" id="name" placeholder="Your Name" required>
    <input type="number" name="score" id="score" placeholder="Your Score 0-100" required>
    <button type="submit" class="btn btn-primary">Add</button>`;

  rightBlock.appendChild(rightBlockTitle);
  rightBlock.appendChild(rightBlockForm);

  return rightBlock;
};

export default rightBlock;

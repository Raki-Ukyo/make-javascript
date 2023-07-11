// Import stylesheets
import './style.css';

const onClickAdd = () => {
  // 敵視うとボックスの値を取得し初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';
  alert(inputText);
};

document
  .getElementById('add-button')
  .addEventListener('click', () => onClickAdd());

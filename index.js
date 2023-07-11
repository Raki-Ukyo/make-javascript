// Import stylesheets
import './style.css';

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';
  // alert(inputText);

  // div生成
  const div = document.createElement('div');
  div.className = 'list-row';
  div.innerText = inputText;

  // liタグ生成
  const li = document.createElement('li');

  // liの子要素に各要素を設定
  li.appendChild(div);
  console.log(li);

  // 未完了リストに追加
  document.getElementById('incomplete-list').appendChild(li);
};

document
  .getElementById('add-button')
  .addEventListener('click', () => onClickAdd());

// Import stylesheets
import './style.css';

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  // div生成
  const div = document.createElement('div');
  div.className = 'list-row';

  //pタグ生成
  const p = document.createElement('p');
  p.innerText = inputText;

  // bnutton("完了")タグ生成
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    alert('完了');
  });

  // bnutton("削除")タグ生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    alert('削除');
  });

  // liタグ生成
  const li = document.createElement('li');

  // liの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  console.log(li);

  // 未完了リストに追加
  document.getElementById('incomplete-list').appendChild(li);
};

document
  .getElementById('add-button')
  .addEventListener('click', () => onClickAdd());

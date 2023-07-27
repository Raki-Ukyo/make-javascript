// Import stylesheets
import './style.css';

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  // liタグ生成
  const li = document.createElement('li');

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
    //削除押下で親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(div.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //Todo内のテキスト取得
    const text = addTarget.firstElementChild.innerText;

    // 初期化
    addTarget.textContent = null;

    // pタグ生成
    p.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';

    // divタグの子要素に各要素を設定
    li.appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById('complete-list').appendChild(li);
  });

  // bnutton("削除")タグ生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    //削除押下で親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(div.parentNode);
  });

  // liの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById('incomplete-list').appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
};

document
  .getElementById('add-button')
  .addEventListener('click', () => onClickAdd());

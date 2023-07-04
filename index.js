// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/**
 * const,letなどの変数宣言
 */

var val1 = 'var変数';
console.log(val1);

// var変数は上書き可能
val1 = 'var変数を上書き';
console.log(val1);

// var変数は再宣言可能
var val1 = 'var変数を再宣言';
console.log(val1);

const val2 = {
  name: 'じゃけぇ',
  address: '広島',
};
console.log(val2);
val2.name = '広島人';
console.log(val2);

const nameArr = ['田中', '山田', 'じゃけぇ'];

const nameArr2 = nameArr.filter((name) => {
  return name == '田中';
});

console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

const newNameArr = nameArr.map((name)=>{
  if(name === 'じゃけぇ'){
    return name;
  }else{
    return `${name}さん`
  }
})

console.log(newNameArr);
// dom.js
// Document Object Model
//let myPicture = {name :"해와달", whdth : 200, heigth:300} => property(속성)
// <img src ="small.jpg"> => attribute(속성)
document.addEventListener('DOMContentLoaded', attrChangeFunc);

function attrChangeFunc(e) {

  // 대상선택.
  document.querySelectorAll('div#small-pic > img').forEach(function (item) {
    console.log(item);
    // img 이벤트 동록;
    item.addEventListener('mouseover', function (e) {
      console.log(e.target.src);
      document.querySelector('#prod-pic > img').src = e.target.src;
    })
  });


//button 대상 선택.
document.querySelector('#desc button').addEventListener('click', function() {
  let itemName = document.querySelector('#desc>ul>li:nth-of-type(1)>span').innerText;
  let price = document.querySelector('#desc>ul>li:nth-of-type(2)>input').Value;
  let logis = document.querySelector('#desc>ul>li:nth-of-type(3)>input').Value;
  itemName= document.querySelectorAll('#desc>ul>li')[0].firstElementChild.innerText;
  price = document.querySelectorAll('#desc>ul>li')[1].lastElementChild.Value;
  logis = document.querySelectorAll('#desc>ul>li')[2].children[1].Value;
  console.log(itemName,price,logis) 
  
  alert(`${itemName}(결제금액:${parseInt(price)>=5000 ? parseInt(price) : parseInt(price)+parseInt(logis)}원)`);
  //onsole.log(itemName)
});

} // end of attrChangeFunc.

//요소의 값을 변경.
function domChangeFunc() {
  let heading = document.getElementById('heading');
  heading.onclick = function () {
    heading.innerText = "추천! 오늘의 커피";
    document.getElementById('cup').src = "images/coffee-blue.jpg";
  }
  console.log(heading);

  let detail = document.querySelector('#detail>ul');
  // detail.innerHTML = '<il>사과</il>,<il>바나나</il>';
  //console.log();
  //console.log(detail.innerHTML);
  //console.log(detail.textContent);
}
// DOM 요소의 선택
function domFunc() {
  let targetItem = document.getElementById('container'); //id 값으로 선택.
  targetItem = document.querySelector('#container'); //HTMLCollection([배열])

  targetItem = document.getElementsByClassName('small'); // HTMLCollection([배열])
  for (let i = 0; i < targetItem.length; i++) {
    console.log(targetItem[i].src);
  }
  targetItem = document.querySelectorAll('.small'); // NodeList([배열])
  targetItem.forEach(function (item) {
    item.style.borderColor = 'red';
    item.style.borderWidth = '3px';
    item.style.borderStyle = 'soild';
  });
  targetItem = document.getElementsByTagName('img'); //HTMLCollection([배열])
  targetItem = document.querySelectorAll('img'); // NodeList
  console.log(targetItem);

} // end of domFunc()

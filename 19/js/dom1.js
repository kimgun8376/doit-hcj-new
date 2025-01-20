// dom1.js
// element(tag) vs. node
document.addEventListener('DOMContentLoaded',function(){
  let container = document.querySelector('#container');
  console.dir(container.children); 

  document.querySelector('button').addEventListener('click', function(){
    container.children[3].style.display = 'block';
   // document.querySelector('#detail>ul').innerHTML += '<li>가공법 : 위시드</li>';
    //버튼을 눌렀을떄 상세 설명이 보이도록.
    let item = document.createElement('li'); // Element 생성 
    let txt = document.createTextNode('가공법 : 위시드'); // TextNode 생성.
    item.appendChild(txt); // 부모.appendChild(자식)
    console.log(item);
    document.querySelector('#detail>ul').appendChild(item);
  })
})

   
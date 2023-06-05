//추가될 todo가 적용될 곳
const showTodo = document.querySelector('.showTodo');


//삭제버튼 생성 함수
const makeDelBtn = ()=>{
    const delBtn = document.createElement('button');
    delBtn.classList.add('deleted');
    delBtn.innerHTML= 'delete';
    return delBtn
}

//checked 함수
const addChecked = (tag)=>{
    tag.addEventListener('click',(evt)=>{

       if(evt.target.nodeName != 'LI'){
        return
       } else{
            evt.target.classList.toggle('checked')
       } 
    })
}
//todo 추가 함수
const addTodoFunc = (todo) => {
    const addLi = document.createElement('li');
    addLi.innerText = todo;
    const delBtn = makeDelBtn();
    addLi.appendChild(delBtn);
    addChecked(addLi)
    showTodo.append(addLi);
}

//추가CREATE
const addKey = document.querySelector('#addKey');
const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    if(!addKey.value)return
    else{
        addTodoFunc(addKey.value);
        addKey.value = '';
    }
})

 //삭제 부분
showTodo.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('deleted')) {
      const li = target.closest('li');
      li.remove();
     }
  });


showTodo.addEventListener('dblclick',(evt)=>{
    evt.target.rmoeve()
})


//제목을 눌렀을 때 사용방법 알려줌
document.querySelector('h1').addEventListener('click',()=>{
    alert('클릭: 체크 | 더블클릭: 삭제')
})
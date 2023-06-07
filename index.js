//추가될 todo가 적용될 곳
const showTodo = document.querySelector('.showTodo');


//삭제버튼 생성 함수
const makeDelBtn = ()=>{
    const delBtn = document.createElement('button');
    delBtn.classList.add('deleted');
    delBtn.innerHTML= '삭제';
    return delBtn
}

//checked 함수
const addChecked = (tag)=>{
    tag.addEventListener('click',(evt)=>{
        evt.target.classList.toggle('checked')
       } 
    )}

//todo 추가 함수
const addTodoFunc = (todo) => {
    const addLi = document.createElement('li');
    const text = document.createElement('span');
    text.innerText = todo;
    const delBtn = makeDelBtn();
    addLi.appendChild(text);
    addLi.appendChild(delBtn);
    showTodo.appendChild(addLi);
    addChecked(text)
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
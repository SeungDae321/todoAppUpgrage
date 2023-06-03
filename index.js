//추가될 todo가 적용될 곳
const showTodo = document.querySelector('.showTodo');

//삭제버튼 생성 함수
const makeDelBtn = ()=>{
    const updateBtn = document.createElement('button');
    updateBtn.classList.add('updated')
    updateBtn.innerHTML = 'update';
    return updateBtn;

}

//업데이트버튼 생성 함수
const makeUpdateBtn = ()=>{
    const delBtn = document.createElement('button');
    delBtn.classList.add('deleted');
    delBtn.innerHTML= 'delete';
    return delBtn
}

//checked 함수
const addChecked = (tag)=>{
    tag.addEventListener('click',(evt)=>{
        evt.target.classList.toggle('checked')
    })
}
//todo 추가 함수
const addTodoFunc = (todo) => {
    const addLi = document.createElement('li');
    addLi.innerText = todo;

    const updateBtn = makeUpdateBtn();
    const delBtn = makeDelBtn();

    addLi.appendChild(updateBtn);
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

showTodo.addEventListener('click', (evt) => {
    //삭제 부분
    const target = evt.target;
    if (target.classList.contains('deleted')) {
      const li = target.closest('li');
      li.remove();
    //업데이트 부분
    } else if (target.classList.contains('updated')) {
        const li = target.closest('li');
        li.innerText = update();
        const updateBtn = makeUpdateBtn();
        const delBtn = makeDelBtn();
        li.appendChild(updateBtn);
        li.appendChild(delBtn);
    }
  });

function update(){
    let text =  prompt('수정 내용 입력');
    return text;
}
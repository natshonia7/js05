const form = document.querySelector('#form');
const input = document.querySelector('input[name="username"]');
const ul = document.querySelector('.ul');
const li=document.createElement('li');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const li=document.createElement('li');
    li.textContent=input.value;
    ul.appendChild(li);
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    const span=document.createElement('span')


    span.textContent=input.value;
    li.appendChild(checkbox);
    
    checkbox.addEventListener('click', onclick);

    function onclick(){
        li.remove()
    }
   


    input.value='';
    input.focus();
})
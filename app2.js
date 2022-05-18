const modal = document.querySelector('.modal');
const btn = document.getElementById('btn');



btn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.toggle('display-none')

});
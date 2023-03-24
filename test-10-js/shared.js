const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanBtns = document.querySelectorAll('.plan button');
// var 대신에 const 사용
// console.dir(backdrop)

for (let i = 0; i < selectPlanBtns.length; i++) {
    selectPlanBtns[i].addEventListener('click', function(){
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}
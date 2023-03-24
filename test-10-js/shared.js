const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoBtn = document.querySelector('.modal__action--negative');
const selectPlanBtns = document.querySelectorAll('.plan button');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// var 대신에 const 사용
// console.dir(backdrop)
for (let i = 0; i < selectPlanBtns.length; i++) {
    selectPlanBtns[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

function closeModal(){
    // backdrop.style.display='none';
    // modal.style.display='none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

backdrop.addEventListener('click', function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoBtn){
    modalNoBtn.addEventListener('click', closeModal);
}

toggleBtn.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});


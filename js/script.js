const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');


// open menu

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active');
    // dont scroll 
    const body = document.body;

    body.style.position = 'fixed';

})


// u can scroll 

function canScroll(){
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

///////////////////// close menu


// on cross
close.addEventListener('click', ()=>{ 
    menu.classList.remove('active');
    canScroll();
})


// on overlay
overlay.addEventListener('click', ()=>{
    menu.classList.remove('active');
    canScroll();
})

// on escape


document.addEventListener('keydown', (e)=>{
    if(e.keyCode === 27){
        menu.classList.remove('active');
        canScroll();
    }
})
// // dont scroll 
// const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
// const body = document.body;

// body.style.position = 'fixed';
// body.style.top = `-${scrollY}`;


// window.addEventListener('scroll', () => {
//     document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
// });
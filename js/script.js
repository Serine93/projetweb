let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

/*const switchThemeBtn = document.querySelector('.btn');
let toggleTheme = 0;


switchThemeBtn.addEventListener('click', () => {

    if(toggleTheme === 0) {

        document.documentElement.style.setProperty('--main-color', '#f1f1f1');
        document.documentElement.style.setProperty('--black', 'rgb(45, 183, 26)');
        document.documentElement.style.setProperty('--bg', 'rgb(29, 163, 173)');
        toggleTheme++;

    } else {

        document.documentElement.style.setProperty('--main-color', 'rgb(45, 183, 26)');
        document.documentElement.style.setProperty('--black', 'rgb(45, 183, 26)');
        document.documentElement.style.setProperty('--bg', 'rgb(29, 163, 173)');
        toggleTheme--;

    }


})*/

// let cartItem = document.querySelector('.cart-items-container');

/* document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
} */
/* 

            

const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Go Light"

    }
    let moon_btn = document.querySelector('.moon-btn');
document.querySelector('#moon-btn').onclick = () =>{
    moon_btn.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    body.classList
}

}) */
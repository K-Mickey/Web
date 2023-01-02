function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let button = menu.querySelector('.burger-menu_button');
    let lines = menu.querySelector('.burger-menu_lines');
    let links = menu.querySelector('.burger-menu_link');
    let overlay = menu.querySelector('.burger-menu_overlay');
    let body = document.querySelector('body');

    button.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu();
    });

    lines.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu();
    });

    links.addEventListener('click', () => toggleMenu);
    overlay.addEventListener('click', () => toggleMenu);
    body.addEventListener('click', () => toggleMenu);

    function toggleMenu(){
        if (menu.classList.contains('burger-menu_active')) {
            menu.classList.remove('burger-menu_active');
            body.style.overflow = 'visible';
        } else {
            menu.classList.add('burger-menu_active');
            body.style.overflow = 'hidden';
        }
    }
}

burgerMenu('.burger-menu');
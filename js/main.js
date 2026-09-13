const menuButton = document.querySelector('.toggle-menu');
const navigation = document.querySelector('#primary-navigation');

menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
});

navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) menuButton.setAttribute('aria-expanded', 'false');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.focus();
    }
});

// Practice forms have no backend; do not submit entered data.
document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        window.alert('This is a practice demo. No data has been sent.');
    });
});

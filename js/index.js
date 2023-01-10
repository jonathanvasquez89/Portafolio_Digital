// Mode Dark
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const modeDark = document.getElementById('modeDark');
let labelModeDark = document.getElementById('labelModeDark');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme',theme);
}
modeDark.addEventListener('change', (event) => {
    let switchTotheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    
    let checked = event.target.checked;
    if (checked == true) {
        labelModeDark.innerHTML = '<i class="bi bi-brightness-low-fill"></i>';
        labelModeDark.style.color = '#c89735';
    } else {
        labelModeDark.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        labelModeDark.style.color = '#434343';
    }
    setTheme(switchTotheme); 
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);


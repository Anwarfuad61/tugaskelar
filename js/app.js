document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const toggleButton = document.getElementById('toggle-button');

    function toggleTheme() {
        if (themeSwitch.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    const savedTheme = localStorage.getItem('theme');
    themeSwitch.checked = savedTheme === 'dark';
    toggleTheme();

    themeSwitch.addEventListener('change', toggleTheme);
    toggleButton.addEventListener('change', toggleTheme);
});


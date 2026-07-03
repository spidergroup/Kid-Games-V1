document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (header) {
        fetch('/_nav.html')
            .then(response => response.text())
            .then(data => {
                header.innerHTML = data;
            });
    }
});

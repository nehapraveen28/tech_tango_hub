document.addEventListener("DOMContentLoaded", function() {
    const labels = document.querySelectorAll('.input-box label');

    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('');
    });

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
});

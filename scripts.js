document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const messages = document.getElementById('messages');

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.textContent = messageText;
            messages.appendChild(messageElement);
            messageInput.value = '';
            messages.scrollTop = messages.scrollHeight;
        }
    });

    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'index.html';
});

document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML = 'Big O: N/A\nTheta: N/A\nOmega: N/A';
});

document.getElementById('chat-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userCode = input.value.trim();

  if (!userCode) return;

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userCode })
  });

  const data = await res.json();
  chatBox.innerHTML = ''; // Clear chat box
  chatBox.innerHTML += `<div class="message ai"><pre>${data.reply}</pre></div>`;
});

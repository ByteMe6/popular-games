window.addEventListener('keydown', (e) => {
if (e.keyCode === 32 && e.target === document.body) {
e.preventDefault();
}
});
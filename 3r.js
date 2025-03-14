document.querySelectorAll('.animation-element').forEach(element => {
    element.style.top = Math.random() * 80 + '%';
    element.style.left = Math.random() * 80 + '%';
});
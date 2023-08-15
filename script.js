const container = document.getElementById('gridContainer');
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.grid-container');

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });
        container.appendChild(div);
    }
});

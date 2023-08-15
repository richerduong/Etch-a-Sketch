document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.grid-container');
    const resizeButton = document.getElementById('resizeButton');
    
    createGrid(16); // Start with a 16x16 grid

    resizeButton.addEventListener('click', () => {
        let size = parseInt(prompt("Enter the number of squares per side (max 100):", "16"));
        if (size && size > 0 && size <= 100) {
            container.innerHTML = '';  // Clear the existing grid
            createGrid(size);  // Create a new grid
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    });

    function createGrid(size) {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.addEventListener('mouseover', function() {
                this.classList.add('hovered');
            });
            container.appendChild(div);
        }
    }
});

// Select elements
let lists = document.querySelectorAll('.list'); // All draggable items
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');

// Add drag and drop functionality to each list item
lists.forEach((list) => {
    list.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', e.target.id); 
        setTimeout(() => {
            list.style.display = 'none'; 
        }, 0);
    });

    list.addEventListener('dragend', function () {
        list.style.display = 'block'; 
    });
});

[rightBox, leftBox].forEach((box) => {
    box.addEventListener('dragover', function (e) {
        e.preventDefault(); // Allow drop
    });

    box.addEventListener('drop', function (e) {
        e.preventDefault();
        let id = e.dataTransfer.getData('text'); 
        let draggedElement = document.getElementById(id); 
        box.appendChild(draggedElement); 
    });
});

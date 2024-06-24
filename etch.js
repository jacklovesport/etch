
const gridContainer = document.getElementById('grid-container');
const defaultRows = 16;
const defaultColumns = 16;
const maxRows = 32;
const maxColumns = 32;

let rows = defaultRows;
let columns = defaultColumns;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid() {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.addEventListener('mouseover', () => {
                const randomColor = getRandomColor();
                cell.style.backgroundColor = randomColor;
            });
            gridContainer.appendChild(cell);
        }
    }
}

function resetGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
    });
}

function updateGridSize() {
    let newRows = parseInt(document.getElementById('rows').value);
    let newColumns = parseInt(document.getElementById('columns').value);


    if (newRows > maxRows) {
        newRows = maxRows;
    }
    if (newColumns > maxColumns) {
        newColumns = maxColumns;
    }

    rows = newRows;
    columns = newColumns;

    createGrid();
}

createGrid();

document.getElementById('reset').addEventListener('click', resetGrid);
document.getElementById('set-size').addEventListener('click', updateGridSize);



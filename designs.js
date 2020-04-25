// Select color input and store it
var color = document.getElementById('colorPicker');

// Select size input and store
var width = document.getElementById('inputWidth');
var height = document.getElementById('inputHeight');

// Table define
var grid = document.getElementById('pixelCanvas');

//Other variables declared at the beginning (use later)
var rowsCount, row, cell;
// Event listener for Submit button so that user can change table characteristics or reset grid to blank
var submitButton= document.getElementById('sizePicker');
submitButton.addEventListener('submit', function(event) {
    event.preventDefault();
    rowsCount = grid.rows.length; // reset to blank grid
    for(let z = 1; z <= rowsCount; z++) {
        grid.deleteRow(0);
    }
    makeGrid(width.value, height.value); // Call makeGrid()
});

//makeGrid function define
// make rows, make columns, change color with event listener 
function makeGrid(width, height) {
    for (let x = 1; x <= height; x++) {
        row = grid.insertRow(-1);
        for (let y = 1; y <= width; y++) {
            cell = row.insertCell(-1);
            cell.addEventListener('click', function(event) {
                event.target.style.backgroundColor = color.value;
            });
        }
    }
}

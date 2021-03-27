function generate() {
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;

    // Convert string values to a number
    rows = Number(rows);
    columns = Number(columns);

    // Check if a valid input
    if (isNaN(rows) || isNaN(columns)) {
        alert("Invalid input!")

    } else {
        // Generate the table!
        let table = createTable(rows, columns);
        document.write(table)
    }
    
}

function createTable(rows, columns) {
    let html = '<table>';
    
    for (let row of Array(rows).keys()) {
        html +=  '<tr>';

            row++;
            for (let col of Array(columns).keys()) {
                col++;
                html += `<td>${row*col}</td>`;
            }

        html +=  '</tr>';
    }

    html += '</table>';
    return html;
}

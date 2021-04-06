// 5. Write a JavaScript function to add rows to a table.
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Insert row in a table - w3resource</title>
// </head><body>
// <table id="sampleTable" border="1">
// <tr><td>Row1 cell1</td>
// <td>Row1 cell2</td></tr>
// <tr><td>Row2 cell1</td>
// <td>Row2 cell2</td></tr>
// </table><br>
// <input type="button" onclick="insert_Row()" value="Insert row"> 
// </body></html>


function insertRow() {
    const tableElement = document.getElementById('sampleTable');
    const tableBodyElement = tableElement.children[0];
    const rowCount = tableBodyElement.children.length;
    console.log(rowCount);
    const nextRowNumber = rowCount + 1;

    const newRow = `
        <tr>
            <td>Row${nextRowNumber} cell1</td>
            <td>Row${nextRowNumber} cell2</td>
        </tr>
    `;
    tableBodyElement.innerHTML += newRow;
}
function solve (firstString, rowsLength) {

    if (rowsLength <= 1 || firstString.length < rowsLength) {
        return console.log(firstString);
    }

    let zigZagMatrix = [];
    let currentRow = 0;
    let output = '';
    
    for (let i = 0; i < rowsLength; i++) {
        zigZagMatrix.push([]);
    }

    while (currentRow <= firstString.length -1) {

        for(let i = 0; i < zigZagMatrix.length; i++) {
        
            if(currentRow > firstString.length - 1) {
                break;
            }
    
            zigZagMatrix[i][currentRow] = firstString[currentRow];
            currentRow++
        }

        for (let i = zigZagMatrix.length - 2; i > 0; i--) {
            
            if(currentRow > firstString.length - 1) {
                break;
            }

            zigZagMatrix[i][currentRow] = firstString[currentRow];
            currentRow++
        }
    }

    for (let letter of zigZagMatrix) {
        output += letter.join('');
    }

    console.log(output)
}

solve('PAYPALISHIRING', 3);
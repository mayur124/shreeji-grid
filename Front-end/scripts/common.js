export const createMultipleAppendTo = parentEl => elements => elements.forEach(element => parentEl.appendChild(element));
export const getTblRows = rows => rows.map(row => getRow(row));
export const renderTblBody = rows => {
    const tBody = document.createElement('tbody');
    rows.forEach(row => tBody.appendChild(getRow(row)));
    return tBody;
}
export const getRow = row => {
    const tr = document.createElement("tr");
    for (const key in row) {
        tr.appendChild(_getTd(row[key]));
    }
    return tr;
}
const _getTd = value => {
    const _td = document.createElement('td');
    _td.innerText = value;
    _td.classList.add('border', _getAlignmentClass(value));
    return _td;
}
/**
 * set position of string data to left and rest to the right
 * @param {any} text 
 * @returns {string} alignment class
*/
const _getAlignmentClass = text => {
    if (typeof text == "string") {
        return "text-left";
    } else {
        return "text-right";
    }
}
/**
 * @param {HTMLTableSectionElement} tBody
 * @param {HTMLTableRowElement[]} rows 
*/
export const setTblRows = (tBody, rows) => {
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    tBody.append(...rows);
    return tBody;
}
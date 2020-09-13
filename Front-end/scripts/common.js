//#region Table-Initialization
/**
* @type {({
* getTableElement: () => HTMLTableElement,
* getPageData: () => {totalRecords: number, totalPages: number},
* getRowData: () => any,
* getColumnCount: () => number,
* })} paginationOb
*/
let _tableData;
/**
 * @param {({
    * getTableElement: () => HTMLTableElement,
    * getPageData: () => {totalRecords: number, totalPages: number},
    * getRowData: () => any,
    * getColumnCount: () => number,
    * })} tableData 
   */
export const setTableData = tableData => {
    return new Promise((resolve, reject) => {
        if (tableData) {
            _tableData = tableData;
            resolve();
        } else {
            reject(tableData);
        }
    });
}
export const getTableEl = () => _tableData.getTableElement();
export const getRowData = () => _tableData.getRowData();
export const getPaginationData = () => _tableData.getPageData();
export const getColumnCount = () => _tableData.getColumnCount();
//#endregion

export const appendToElement = parentEl => elements => elements.forEach(element => parentEl.appendChild(element));
export const appendRecursive = parentEl => {
    let innerAppend = childEl => {
        if (childEl) {
            parentEl.appendChild(childEl);
            return appendRecursive(childEl);
        }
    }
    return innerAppend;
}
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
const _getAlignmentClass = text => typeof text == 'string' ? 'text-left' : 'text-right';
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
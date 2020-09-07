import { Pagination } from "./pagination.js";
import * as common from "./common.js";

let tableData;
let tableElement;

export const initPagination = (tblEl, pageData, tblData, numOfCols) => {
    new Pagination(tblEl, pageData, tblData, numOfCols);
}

/**
 * @param {HTMLTableElement} tblEl 
 * @param {{data: any, pageData: {totalRecords: number, totalPages: number}}} tblData
 */
export const initTable = (tblEl, tblData) => {
    _setTblData(tblData);
    _setTblElement(tblEl)
    _renderHeaders(tblEl, tblData[0]);
    _renderBody(tblEl, tblData);
    _initSort(tblEl);
}
const _setTblData = tblData => tableData = tblData;
const _getTblData = () => tableData;
/**
 * @param {HTMLTableElement} tblEl 
 */
const _setTblElement = tblEl => tableElement = tblEl;
const _getTblElement = () => tableElement;

/**
 * @param {HTMLElementTagNameMap} element 
 */
const _createElement = element => document.createElement(element);
const _createDocFragment = () => document.createDocumentFragment();

const _renderHeaders = (tblEl, data) => {
    const _headerFrag = _createDocFragment();
    const _tHead = _createElement('thead');
    _tHead.appendChild(_getHeaderRow(data))
    _headerFrag.appendChild(_tHead);
    tblEl.appendChild(_headerFrag);
}

const _getHeaderRow = data => {
    const _headerRow = _createElement('tr');
    Object.keys(data).forEach((header, index) => {
        _headerRow.appendChild(_getHeaderTh(header, index));
    })
    return _headerRow;
}

const _getHeaderTh = (value, index) => {
    const _th = _createElement('th');
    const _label = _createElement('label');
    _th.classList.add("border");
    _label.innerText = value;
    _label.classList.add("text-upper", "font-size-large");
    const _multipleAppend = common.createMultipleAppendTo(_th);
    _multipleAppend([
        _label,
        _getSearchNode(index)
    ]);
    return _th;
}

const _getSearchNode = index => {
    const inputField = _createElement("input");
    inputField.classList.add("w-100", "border", "mt-1");
    inputField.style.height = "2em";
    inputField.style.padding = "2px";
    inputField.style.borderColor = "#cbe2f7";
    inputField.addEventListener("keyup", () => _search(event, index));
    return inputField;
}

/**
 * @param {KeyboardEvent} event
 * @param {number} index
*/
const _search = (event, index) => {
    const value = event.srcElement.value.toLowerCase();
    const rows = common.getTblRows(_getTblData());
    const filteredRows = rows.filter(row => {
        let _text = row.querySelector(`td:nth-child(${index + 1})`).textContent.trim();
        return _text.toLowerCase().indexOf(value) > -1;
    });
    if (filteredRows.length == 0) {
        common.setTblRows(_getTblBody(), rows);
    } else {
        common.setTblRows(_getTblBody(), filteredRows);
    }
}

const _getTblBody = () => {
    return _getTblElement().tBodies[0];
}

const _renderBody = (tblEl, data) => {
    const _bodyFrag = _createDocFragment();
    _bodyFrag.appendChild(common.renderTblBody(data));
    tblEl.appendChild(_bodyFrag);
}

const _initSort = tblEl => {
    tblEl.querySelectorAll("span.text-upper").forEach((headerCell, index) => {
        headerCell.addEventListener("click", () => {
            const isAscending = headerCell.classList.contains("th-sort-asc");
            _sortTableByColumn(index, !isAscending);
        });
    });
}
/**
 * @param {number} index 
 * @param {boolean} ascending 
*/
const _sortTableByColumn = (index, ascending = true) => {
    const dirModifier = ascending === true ? 1 : -1;
    const rows = common.getTblRows(_getTblData());
    const sortedRows = rows.sort((a, b) => {
        let aColText = a.querySelector(`td:nth-child(${index + 1})`).textContent.trim();
        let bColText = b.querySelector(`td:nth-child(${colIndex + 1})`).textContent.trim();
        if (_isNumeric(aColText)) {
            aColText = Number(aColText);
            bColText = Number(bColText);
        }
        if (typeof aColText == "number" && aColText == bColText) {
            return 1;
        }
        else {
            return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
        }
    });
    common.setTblRows(_getTblBody(), sortedRows);
    _handleToggleArrowStyle(colIndex, ascending);
}

const _isNumeric = text => {
    const numRegex = /\d+/g;
    return numRegex.test(text) && !(text.includes("-") || text.includes(":"));
}
/**
 * @param {number} colIndex 
 * @param {boolean} ascending 
*/
const _handleToggleArrowStyle = (colIndex, ascending) => {
    const tblEl = _getTblElement();
    tblEl.querySelectorAll("thead tr:nth-child(1) th span").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    let selectedSpan = tblEl.querySelector(`thead tr:nth-child(1) th:nth-child(${colIndex + 1}) span`);
    let toggle = _toggleClass(selectedSpan);
    toggle("th-sort-asc")(ascending);
    toggle("th-sort-desc")(!ascending);
}
/**
 * 
 * @param {Element} parentElement 
 */
const _toggleClass = parentElement => className => flag => parentElement.classList.toggle(className, flag);

import * as common from "./common.js";

export const renderTable = () => {
    _renderHeaders();
    _renderBody();
    _initSort();
}

/**
 * @param {HTMLElementTagNameMap} element 
 */
const _createElement = element => document.createElement(element);
const _createDocFragment = () => document.createDocumentFragment();
const _getRowData = () => common.getRowData();
const _getTableEl = () => common.getTableEl();

const _renderHeaders = () => {
    const _headerFrag = _createDocFragment();
    const _tHead = _createElement('thead');
    const _headers = _getRowData()[0];
    const _tblEl = _getTableEl();
    _tHead.appendChild(_getHeaderRow(_headers));
    _headerFrag.appendChild(_tHead);
    _tblEl.appendChild(_headerFrag);
}

const _getHeaderRow = headers => {
    const _headerRow = _createElement('tr');
    Object.keys(headers).forEach((header, index) => {
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
    const _appendToTh = common.appendToElement(_th);
    _appendToTh([
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
    const rows = common.getHTMLTblRows(_getRowData());
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
    return _getTableEl().tBodies[0];
}

const _renderBody = () => {
    const _bodyFrag = _createDocFragment();
    const _tblEl = _getTableEl();
    const _data = _getRowData();
    _bodyFrag.appendChild(common.renderTblBody(_data));
    _tblEl.appendChild(_bodyFrag);
}

const _initSort = () => {
    const _tblEl = _getTableEl();
    _tblEl.querySelectorAll("label.text-upper").forEach((headerCell, index) => {
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
    const rows = common.getHTMLTblRows(_getRowData());
    const sortedRows = rows.sort((a, b) => {
        let aColText = a.querySelector(`td:nth-child(${index + 1})`).textContent.trim();
        let bColText = b.querySelector(`td:nth-child(${index + 1})`).textContent.trim();
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
    _handleToggleArrowStyle(index, ascending);
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
    const tblEl = _getTableEl();
    tblEl.querySelectorAll("thead tr:nth-child(1) th label").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    let selectedLabel = tblEl.querySelector(`thead tr:nth-child(1) th:nth-child(${colIndex + 1}) label`);
    let toggle = _toggleClass(selectedLabel);
    toggle("th-sort-asc")(ascending);
    toggle("th-sort-desc")(!ascending);
}
/**
 * 
 * @param {Element} parentElement 
 */
const _toggleClass = parentElement => className => flag => parentElement.classList.toggle(className, flag);

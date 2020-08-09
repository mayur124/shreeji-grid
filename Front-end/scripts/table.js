/**
 * @param {HTMLTableElement} tableElement 
 * @param {{data: any, pageData: {totalRecords: number, totalPages: number}}} tableData
 */
export function Table(tableElement, tableData) {
    const { data, pageData } = tableData;
    const headers = [];
    function initTable() {
        setHeaders(data[0]);
        renderHeader();
        renderBody();
        enableSorting();
    }
    function setHeaders(row) {
        for (const key in row) {
            headers.push(key);
        }
    }
    function renderHeader() {
        const headerFragment = document.createDocumentFragment();
        const tableHead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        headers.forEach(header => {
            const headerNode = document.createElement("th");
            headerNode.classList.add('border', 'text-upper');
            headerNode.innerText = header.trim();
            headerRow.appendChild(headerNode);
        });
        tableHead.appendChild(headerRow);
        headerFragment.appendChild(tableHead);
        tableElement.appendChild(headerFragment);
    }
    function renderBody() {
        const bodyFragment = document.createDocumentFragment();
        const tBody = document.createElement("tbody");
        data.forEach(row => {
            const tRow = document.createElement("tr");
            for (const key in row) {
                const td = document.createElement("td");
                // td.innerText = checkForDateString(row[key]);
                td.innerText = row[key];
                td.classList.add("border", getAlignmentClass(row[key]));
                tRow.appendChild(td);
            }
            tBody.appendChild(tRow);
        });
        bodyFragment.appendChild(tBody);
        tableElement.appendChild(bodyFragment);
    }
    /**
     * @param {string} text 
     * @returns {boolean}
     */
    function isNumeric(text) {
        const _text = text;
        const numRegex = /(\d+|\.?\d+)/g;
        return numRegex.test(_text);
    }
    /**
     * @param {string} text 
     * @returns {boolean}
     */
    function isDate(text) {
        const _text = text;
        const dateRegex = /\d{4}(-\d{2})+ (\d{2}:?)+/g;
        return dateRegex.test(_text);
    }
    /**
     * Returns the data-type of the text
     * @param {string} text 
     * @returns {'string' | 'number' | 'date'} data-type of the text
     */
    function getDataType(text) {
        const dateRegex = /\d{4}(-\d{2})+ (\d{2}:?)+/g;
        const numRegex = /(\d+|\.?\d+)/g;
        if (dateRegex.test(text)) {
            return "date"
        }
        else if (numRegex.test(text)) {
            return "number";
        }
        return "string";
    }
    /**
     * set position of string data to left and rest to the right
     * @param {any} text 
     * @returns {string} alignment class
     */
    function getAlignmentClass(text) {
        if (typeof text == "string") {
            return "text-left";
        } else {
            return "text-right";
        }
    }
    function enableSorting() {
        tableElement.querySelectorAll("th").forEach(headerCell => {
            headerCell.addEventListener("click", () => {
                const isAscending = headerCell.classList.contains("th-sort-asc");
                sortTableByColumn(headerCell.cellIndex, !isAscending);
            });
        });
    }
    /**
     * @param {number} colIndex 
     * @param {boolean} ascending 
     */
    function sortTableByColumn(colIndex, ascending = true) {
        const dirModifier = ascending === true ? 1 : -1;
        const tBody = tableElement.tBodies[0];
        const rows = Array.from(tBody.querySelectorAll("tr"));
        const sortedRows = rows.sort((a, b) => {
            let aColText = a.querySelector(`td:nth-child(${colIndex + 1})`).textContent.trim();
            let bColText = b.querySelector(`td:nth-child(${colIndex + 1})`).textContent.trim();
            switch (getDataType(aColText)) {
                case "number":
                    aColText = Number(aColText);
                    bColText = Number(bColText);
                    break;
                default:
                    break;
            }
            if (typeof aColText == "number" && aColText == bColText) {
                return 1;
            }
            else {
                return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
            }
        });
        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
        tBody.append(...sortedRows);
        handleToggleArrowStyle(colIndex, ascending);
    }
    /**
     * @param {number} colIndex 
     * @param {boolean} ascending 
     */
    function handleToggleArrowStyle(colIndex, ascending) {
        tableElement.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
        tableElement.querySelector(`th:nth-child(${colIndex + 1})`).classList.toggle("th-sort-asc", ascending);
        tableElement.querySelector(`th:nth-child(${colIndex + 1})`).classList.toggle("th-sort-desc", !ascending);
    }
    initTable();
}
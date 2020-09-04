import { Pagination } from "./pagination.js";

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
        setPagination();
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
        headers.forEach((header, index) => {
            const headerNode = document.createElement("th");
            const label = document.createElement("span");
            headerNode.classList.add("border");
            label.innerText = header.trim();
            label.classList.add("text-upper", "font-size-large");
            headerNode.appendChild(label);
            headerNode.appendChild(getSearchNode(index));
            headerRow.appendChild(headerNode);
        });
        tableHead.appendChild(headerRow);
        headerFragment.appendChild(tableHead);
        tableElement.appendChild(headerFragment);
    }
    function getSearchNode(colIndex) {
        const inputField = document.createElement("input");
        inputField.classList.add("w-100", "border", "mt-1");
        inputField.style.height = "2em";
        inputField.style.padding = "2px";
        inputField.style.borderColor = "#cbe2f7";
        inputField.addEventListener("keyup", () => search(event, colIndex));
        return inputField;
    }
    /**
     * @param {KeyboardEvent} event
     * @param {number} colIndex
     */
    function search(event, colIndex) {
        const value = event.srcElement.value.toLowerCase();
        const rows = getRows();
        const filteredRows = rows.filter(row => {
            let text = row.querySelector(`td:nth-child(${colIndex + 1})`).textContent.trim();
            return text.toLowerCase().indexOf(value) > -1;
        });
        if (filteredRows.length == 0) {
            setRows(rows);
        } else {
            setRows(filteredRows);
        }
    }
    /**
     * 
     * @param {HTMLTableRowElement[]} rows 
     */
    function setRows(rows) {
        const tBody = tableElement.tBodies[0];
        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
        tBody.append(...rows);
    }
    function renderBody() {
        const bodyFragment = document.createDocumentFragment();
        const tBody = document.createElement("tbody");
        data.forEach(row => {
            const tRow = document.createElement("tr");
            for (const key in row) {
                const td = document.createElement("td");
                td.innerText = row[key];
                td.classList.add("border", getAlignmentClass(row[key]));
                tRow.appendChild(td);
            }
            tBody.appendChild(tRow);
        });
        bodyFragment.appendChild(tBody);
        tableElement.appendChild(bodyFragment);
    }
    function getRows() {
        const rows = [];
        data.forEach(row => {
            const tRow = document.createElement("tr");
            for (const key in row) {
                const td = document.createElement("td");
                td.innerText = row[key];
                td.classList.add("border", getAlignmentClass(row[key]));
                tRow.appendChild(td);
            }
            rows.push(tRow);
        });
        return rows;
    }
    /**
     * @param {string} text 
     * @returns {boolean}
     */
    function isNumeric(text) {
        const numRegex = /\d+/g;
        return numRegex.test(text) && !(text.includes("-") || text.includes(":"));
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
        tableElement.querySelectorAll("span.text-upper").forEach((headerCell, index) => {
            headerCell.addEventListener("click", () => {
                const isAscending = headerCell.classList.contains("th-sort-asc");
                sortTableByColumn(index, !isAscending);
            });
        });
    }
    function setPagination() {
        new Pagination(tableElement, tableData.pageData, headers.length);
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
            if (isNumeric(aColText)) {
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
        setRows(sortedRows);
        handleToggleArrowStyle(colIndex, ascending);
    }
    /**
     * @param {number} colIndex 
     * @param {boolean} ascending 
     */
    function handleToggleArrowStyle(colIndex, ascending) {
        tableElement.querySelectorAll("thead tr:nth-child(1) th span").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
        let selectedSpan = tableElement.querySelector(`thead tr:nth-child(1) th:nth-child(${colIndex + 1}) span`);
        let toggle = toggleClass(selectedSpan);
        toggle("th-sort-asc")(ascending);
        toggle("th-sort-desc")(!ascending);
    }
    /**
     * 
     * @param {Element} parentElement 
     */
    function toggleClass(parentElement) {
        return function (className) {
            return function (flag) {
                return parentElement.classList.toggle(className, flag);
            }
        }
    }
    initTable();
    /* 
        Things remaining >> 
            1. Searching  - server side
            2. Pagination - client and server side
    */
}
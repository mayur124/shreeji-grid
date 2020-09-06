import { Pagination } from "./pagination.js";
import * as common from "./common.js";

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
            const _multipleAppend = common.createMultipleAppendTo(headerNode);
            _multipleAppend([
                label,
                getSearchNode(index)
            ]);
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
        const rows = common.getRows(data);
        const filteredRows = rows.filter(row => {
            let text = row.querySelector(`td:nth-child(${colIndex + 1})`).textContent.trim();
            return text.toLowerCase().indexOf(value) > -1;
        });
        if (filteredRows.length == 0) {
            common.setRows(getTblBody(), rows);
        } else {
            common.setRows(getTblBody(), filteredRows);
        }
    }
    function renderBody() {
        const bodyFragment = document.createDocumentFragment();
        bodyFragment.appendChild(common.renderBody(data));
        tableElement.appendChild(bodyFragment);
    }
    /**
     * @param {string} text 
     * @returns {boolean}
     */
    function isNumeric(text) {
        const numRegex = /\d+/g;
        return numRegex.test(text) && !(text.includes("-") || text.includes(":"));
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
        new Pagination(tableElement, pageData, data, headers.length);
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
        common.setRows(getTblBody(), sortedRows);
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
    function getTblBody() {
        return tableElement.tBodies[0];
    }
    initTable();
    /* 
        Things remaining >> 
            1. Searching  - server side
            2. Pagination - client and server side
    */
}
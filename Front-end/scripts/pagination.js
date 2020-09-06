import * as common from "./common.js"
/**
 * @param {HTMLTableElement} tableElement 
 * @param {any} data
 * @param {{totalRecords: number, totalPages: number}} pageData 
 */
export function Pagination(tableElement, pageData, data, numOfCols) {
    const currentPage = 1;
    const totalPages = pageData.totalPages;
    function setPagination() {
        const footerFragment = document.createDocumentFragment();
        const tableFooter = document.createElement("tfoot");
        const th = document.createElement("th");
        appendFooterControls(th);
        th.colSpan = numOfCols;
        tableFooter.appendChild(th);
        footerFragment.appendChild(tableFooter);
        tableElement.appendChild(footerFragment);
    }
    /**
     * 
     * @param {HTMLTableHeaderCellElement} th 
     */
    function appendFooterControls(th) {
        const _appendTo = common.createMultipleAppendTo(th);
        _appendTo([
            _getFirstPageBtn(),
            _getPreviousPageBtn(),
            _getPageInput(),
            _getNextPageBtn(),
            _getLastPageBtn(),
            _getPageDropdown()
        ]);
    }
    function _getPageInput() {
        const pageField = document.createElement("input");
        pageField.type = "number";
        pageField.classList.add("text-center", "font-size-medium");
        pageField.value = currentPage;
        pageField.min = 1;
        pageField.max = pageData.totalPages;
        pageField.addEventListener("keyup", () => goToPage(event.srcElement.value));
        return pageField;
    }
    function _getFirstPageBtn() {
        const btn = getBtn();
        const firstBtn = btn("&#9668;&#9668;");
        setBtnEventTitle(firstBtn, "first", "First");
        return firstBtn;
    }
    function _getPreviousPageBtn() {
        const btn = getBtn();
        const prevBtn = btn("&#9664;");
        setBtnEventTitle(prevBtn, "previous", "Previous");
        return prevBtn;
    }
    function _getNextPageBtn() {
        const btn = getBtn();
        const nextBtn = btn("&#9654;");
        setBtnEventTitle(nextBtn, "next", "Next");
        return nextBtn;
    }
    function _getLastPageBtn() {
        const btn = getBtn();
        const lastBtn = btn("&#9658;&#9658;");
        setBtnEventTitle(lastBtn, "last", "Last");
        return lastBtn;
    }
    function getBtn() {
        return function (hexCode) {
            const btn = document.createElement("button");
            btn.innerHTML = hexCode;
            btn.classList.add("mx-1", "pagination-button")
            return btn;
        }
    }
    /**
     * 
     * @param {HTMLButtonElement} btn 
     * @param {"first"|"previous"|"next"|"last"} moveDirection 
     * @param {"First"|"Previous"|"Next"|"Last"} title 
     */
    function setBtnEventTitle(btn, moveDirection, title) {
        btn.addEventListener("click", () => moveTo(moveDirection));
        btn.title = title;
    }
    function _getPageDropdown() {
        const pageDropdown = document.createElement("select");
        [5, 10, 25, 50].forEach(pageSize => {
            let option = new Option(pageSize, pageSize);
            option.className = "page-size-dropdown";
            pageDropdown.options.add(option);
        });
        pageDropdown.options.selectedIndex = 3;
        pageDropdown.classList.add("mx-1", "page-size-dropdown");
        pageDropdown.addEventListener("change", () => changePageSize(event));
        return pageDropdown;
    }
    /**
     * 
     * @param {Event} event 
     */
    function changePageSize(event) {
        const selectedPageSize = Number(event.srcElement.value);
        const slicedData = common.getTblRows(data.slice(0, selectedPageSize));
        common.setTblRows(tableElement.tBodies[0], slicedData);
        console.log(selectedPageSize);
    }
    /**
     * 
     * @param {'first'|'previous'|'next'|'last'} direction 
     * @param {number} pageNum
     */
    function moveTo(direction) {
        if (direction == "first") {
            goToPage(0);
        }
        else if (direction == "previous") {
            goToPageSafe(getCurrentPage() - 1);
        }
        else if (direction == "next") {
            goToPageSafe(getCurrentPage() + 1);
        }
        else if (direction == "last") {
            goToPage(pageData.totalPages);
        }
    }
    function getCurrentPage() {
        const tfoot = document.querySelector("tfoot");
        return tfoot.querySelector("input").value;
    }
    function setCurrentPage(pageNumber) {
        const tfoot = document.querySelector("tfoot");
        tfoot.querySelector("input").value = Number(pageNumber);
    }
    const goToPageSafe = page => {
        if (page > 0 && page <= pageData.totalPages) {
            return goToPage(page);
        }
        return setCurrentPage(0);
    }
    /**
     * 
     * @param {number} pageNumber 
     */
    function goToPage(pageNumber) {
        pageNumber = Number(pageNumber);
        console.log(pageNumber);
    }
    setPagination();
}
import * as common from "./common.js"

/**
 * @type {({
 * getTableElement: () => HTMLTableElement,
 * getPageData: () => {totalRecords: number, totalPages: number},
 * getRowData: () => any,
 * getColumnCount: () => number,
 * })} paginationOb
*/
let paginationOb;

/**
 * @param {HTMLElementTagNameMap} element 
 */
const _createElement = element => document.createElement(element);
const _createDocFragment = () => document.createDocumentFragment();

/**
 * @param {({
 * getTableElement: () => HTMLTableElement,
 * getPageData: () => {totalRecords: number, totalPages: number},
 * getRowData: () => any,
 * getColumnCount: () => number,
 * })} paginationOb 
*/
export const initPagination = paginationOb => {
    _setPaginationOb(paginationOb);
    const _footerFragment = _createDocFragment();
    const _tableFooter = _createElement("tfoot");
    const _th = _createElement("th");
    _th.colSpan = paginationOb.getColumnCount();
    _appendFooterControls(_th);
    common.appendRecursive(_footerFragment)(_tableFooter)(_th);
    paginationOb.getTableElement().appendChild(_footerFragment);
}
/**
 * @param {({
 * getTableElement: () => HTMLTableElement,
 * getPageData: () => {totalRecords: number, totalPages: number},
 * getRowData: () => any,
 * getColumnCount: () => number,
 * })} ob 
*/
const _setPaginationOb = ob => {
    paginationOb = ob;
}

const _appendFooterControls = th => {
    const _appendToTh = common.appendToElement(th);
    _appendToTh([
        _getFirstPageBtn(),
        _getPreviousPageBtn(),
        _getPageInput(),
        _getNextPageBtn(),
        _getLastPageBtn(),
        _getPageDropdown(),
    ]);
}
const _getPageInput = () => {
    const pageField = document.createElement("input");
    pageField.type = "number";
    pageField.classList.add("text-center", "font-size-medium");
    pageField.value = 1;
    pageField.min = 1;
    pageField.max = paginationOb.getPageData().totalPages;
    pageField.addEventListener("keyup", () => goToPage(event.srcElement.value));
    return pageField;
}
const _getFirstPageBtn = () => {
    const btn = _getBtn();
    const firstBtn = btn("&#9668;&#9668;");
    setBtnEventTitle(firstBtn, "first", "First");
    return firstBtn;
}
const _getPreviousPageBtn = () => {
    const btn = _getBtn();
    const prevBtn = btn("&#9664;");
    setBtnEventTitle(prevBtn, "previous", "Previous");
    return prevBtn;
}
const _getNextPageBtn = () => {
    const btn = _getBtn();
    const nextBtn = btn("&#9654;");
    setBtnEventTitle(nextBtn, "next", "Next");
    return nextBtn;
}
const _getLastPageBtn = () => {
    const btn = _getBtn();
    const lastBtn = btn("&#9658;&#9658;");
    setBtnEventTitle(lastBtn, "last", "Last");
    return lastBtn;
}
const _getBtn = () => {
    return hexCode => {
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
const setBtnEventTitle = (btn, moveDirection, title) => {
    btn.addEventListener("click", () => moveToDir(moveDirection));
    btn.title = title;
}
const _getPageDropdown = () => {
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
const changePageSize = (event) => {
    const selectedPageSize = Number(event.srcElement.value);
    const slicedData = common.getTblRows(_getRowData().slice(0, selectedPageSize));
    common.setTblRows(_getTableElement().tBodies[0], slicedData);
    console.log(selectedPageSize);
}
const _getRowData = () => paginationOb.getRowData();
const _getTableElement = () => paginationOb.getTableElement();

/**
 * 
 * @param {'first'|'previous'|'next'|'last'} direction 
 * @param {number} pageNum
 */
const moveToDir = (direction) => {
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
const getCurrentPage = () => {
    const tfoot = _getTableElement().querySelector("tfoot");
    return Number(tfoot.querySelector("input").value);
}
const setCurrentPage = (pageNumber) => {
    const tfoot = _getTableElement().querySelector("tfoot");
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
const goToPage = (pageNumber) => {
    pageNumber = Number(pageNumber);
    console.log(pageNumber);
}
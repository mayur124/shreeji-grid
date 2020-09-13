import * as common from "./common.js"

const _btnHexCode = {
    firstBtn: '&#9668;&#9668;',
    prevBtn: '&#9664;',
    nextBtn: '&#9654;',
    lastBtn: '&#9658;&#9658;',
};
const pageSizes = [5, 10, 25, 50];

/**
 * @param {HTMLElementTagNameMap} element 
 */
const _createElement = element => document.createElement(element);
const _createDocFragment = () => document.createDocumentFragment();
const _getRowData = () => common.getRowData();
const _getTableEl = () => common.getTableEl();

export const initPagination = () => {
    const _footerFragment = _createDocFragment();
    const _tableFooter = _createElement("tfoot");
    const _th = _createElement("th");
    _th.colSpan = common.getColumnCount();
    _appendFooterControls(_th);
    common.appendRecursive(_footerFragment)(_tableFooter)(_th);
    _getTableEl().appendChild(_footerFragment);
    _disableBtnsConditionally();
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
    pageField.max = common.getPaginationData().totalPages;
    pageField.addEventListener("keyup", () => _goToPage(event.srcElement.value));
    return pageField;
}
const _getFirstPageBtn = () => {
    const btn = _getBtn();
    const firstBtn = btn(_btnHexCode.firstBtn);
    _setBtnEventTitle(firstBtn, "first", "First");
    return firstBtn;
}
const _getPreviousPageBtn = () => {
    const btn = _getBtn();
    const prevBtn = btn(_btnHexCode.prevBtn);
    _setBtnEventTitle(prevBtn, "previous", "Previous");
    return prevBtn;
}
const _getNextPageBtn = () => {
    const btn = _getBtn();
    const nextBtn = btn(_btnHexCode.nextBtn);
    _setBtnEventTitle(nextBtn, "next", "Next");
    return nextBtn;
}
const _getLastPageBtn = () => {
    const btn = _getBtn();
    const lastBtn = btn(_btnHexCode.lastBtn);
    _setBtnEventTitle(lastBtn, "last", "Last");
    return lastBtn;
}
const _disableBtnsConditionally = () => {
    const tfoot = _getTableEl().querySelector('tfoot');
    const buttons = tfoot.querySelectorAll('button');
    buttons.forEach(btn => {
        if (['next', 'last'].includes(btn.title.toLowerCase())) {
            btn.disabled = _disableOnLastPage();
        }
        else if (['previous', 'first'].includes(btn.title.toLowerCase())) {
            btn.disabled = _disableOnFirstPage();
        }
    });
}
const _disableOnLastPage = () => _getCurrentPage() >= common.getPaginationData().totalPages;
const _disableOnFirstPage = () => _getCurrentPage() <= 1;
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
const _setBtnEventTitle = (btn, moveDirection, title) => {
    btn.addEventListener("click", () => _moveToDir(moveDirection));
    btn.title = title;
}
const _getPageDropdown = () => {
    const pageDropdown = document.createElement("select");
    pageSizes.forEach(pageSize => {
        let option = new Option(pageSize, pageSize);
        option.className = "page-size-dropdown";
        pageDropdown.options.add(option);
    });
    pageDropdown.options.selectedIndex = pageSizes.length - 1;
    pageDropdown.classList.add("mx-1", "page-size-dropdown");
    pageDropdown.addEventListener("change", () => _changePageSize(event));
    return pageDropdown;
}
/**
 * 
 * @param {Event} event 
 */
const _changePageSize = (event) => {
    const selectedPageSize = Number(event.srcElement.value);
    const slicedData = common.getHTMLTblRows(_getRowData().slice(0, selectedPageSize));
    common.setTblRows(_getTableEl().tBodies[0], slicedData);
    console.log(selectedPageSize);
}

/**
 * 
 * @param {'first'|'previous'|'next'|'last'} direction 
 * @param {number} pageNum
 */
const _moveToDir = (direction) => {
    if (direction == "first") {
        _goToPage(1);
    }
    else if (direction == "previous") {
        _goToPageSafe(_getCurrentPage() - 1);
    }
    else if (direction == "next") {
        _goToPageSafe(_getCurrentPage() + 1);
    }
    else if (direction == "last") {
        _goToPage(common.getPaginationData().totalPages);
    }
}
const _getCurrentPage = () => {
    const tfoot = _getTableEl().querySelector("tfoot");
    return Number(tfoot.querySelector("input").value);
}
const _setCurrentPage = (pageNumber) => {
    const tfoot = _getTableEl().querySelector("tfoot");
    tfoot.querySelector("input").value = Number(pageNumber);
}
const _goToPageSafe = page => {
    if (page > 0 && page <= common.getPaginationData().totalPages) {
        return _goToPage(page);
    }
    return _goToPage(1);
}
/**
 * 
 * @param {number} pageNumber 
 */
const _goToPage = (pageNumber) => {
    pageNumber = Number(pageNumber);
    _setCurrentPage(pageNumber);
    _disableBtnsConditionally();
    console.log(pageNumber);
}
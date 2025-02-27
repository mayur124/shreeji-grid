import * as common from "./common.js"
import { URL } from './config.js';

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
        _getTotalPageLabel(),
        _getNextPageBtn(),
        _getLastPageBtn(),
        _getPageDropdown(),
        _getRowsInfoSpan(),
    ]);
}
const _getPageInput = () => {
    const pageField = document.createElement("input");
    pageField.type = "number";
    pageField.classList.add("text-center", "font-size-medium");
    pageField.value = 1;
    pageField.min = 1;
    pageField.max = common.getPaginationData().totalPages;
    pageField.addEventListener("keyup", _debounce(() => _validateInput(pageField), 500));
    return pageField;
}
const _validateInput = pageInput => {
    const input = Number(pageInput.value);
    const min = Number(pageInput.min);
    const max = Number(pageInput.max);
    if (input) {
        if (input >= min && input <= max) {
            _goToPage(input);
        } else {
            resetPagination();
        }
    } else {
        resetPagination();
    }
}
const resetPagination = () => {
    _setCurrentPage(1);
    _goToPage(1);
}
/**
 * 
 * @param {Function} callback 
 * @param {number} delay 
 */
const _debounce = (callback, delay) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(this, ...args), delay);
    };
}
const _getTotalPageLabel = () => {
    const span = _createElement('span');
    span.innerText = `/ ${common.getPaginationData().totalPages}`
    span.classList.add('ml-1', 'font-size-small', 'font-weight-normal');
    return span;
}
const _getRowsInfoSpan = () => {
    const span = _createElement('span');
    span.innerText = _getRowsInfoMessage();
    span.classList.add('float-right', 'top-point-25-rem', 'font-size-small', 'font-weight-normal');
    span.id = 'row-message';
    return span;
}
const _getRowsInfoMessage = () => {
    const pageSize = _getSelectedPageSize();
    const lastRow = _getCurrentPage() * pageSize;
    const firstRow = (lastRow - pageSize) + 1;
    return `${firstRow}-${_getCorrectLastRow(lastRow)}/${common.getPaginationData().totalRecords} records`;
}
const _getCorrectLastRow = lastRow => {
    const totalRecords = common.getPaginationData().totalRecords;
    return lastRow > totalRecords ? totalRecords : lastRow
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
 * @param {Event} event 
 */
const _changePageSize = (event) => {
    const selectedPageSize = Number(event.srcElement.value);
    _paginate(_getCurrentPage() - 1, selectedPageSize);
}
const _getSelectedPageSize = () => {
    const tfoot = _getTableEl().tFoot;
    if (tfoot) {
        return Number(tfoot.querySelector('select').value);
    }
    return pageSizes[pageSizes.length - 1];
}
const _renderUpdatedRows = rows => {
    common.setTblRows(_getTableEl().tBodies[0], rows);
}
/**
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
    const tfoot = _getTableEl().querySelector('tfoot');
    if (tfoot) {
        return Number(tfoot.querySelector('input').value);
    }
    return 1;
}
const _setCurrentPage = (pageNumber) => {
    const tfoot = _getTableEl().querySelector('tfoot');
    tfoot.querySelector('input').value = Number(pageNumber);
}
const _goToPageSafe = page => {
    if (page > 0 && page <= common.getPaginationData().totalPages) {
        return _goToPage(page);
    }
    return _goToPage(0);
}
/**
 * @param {number} pageNumber 
 */
const _goToPage = (pageNumber) => {
    pageNumber = Number(pageNumber);
    _setCurrentPage(pageNumber);
    _disableBtnsConditionally();
    _paginate(pageNumber - 1, _getSelectedPageSize());
}
const _paginate = async (pageNumber, pageSize) => {
    await fetch(`${URL}?pageNo=${pageNumber}&pageSize=${pageSize}`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.data?.length > 0) {
                common
                    .setPageData(responseData.pageData.totalRecords, responseData.pageData.totalPages)
                    .then(() => {
                        const _htmlRows = common.getHTMLTblRows(responseData.data)
                        _renderUpdatedRows(_htmlRows);
                    })
                    .catch(error => console.log('Error in _paginate >> ', error));
                common.setRows(responseData.data);
                _updatePaginationInfo();
            }
        });
}
const _updatePaginationInfo = () => {
    _updateTotalPages();
    _updateRowsMessage();
}
const _updateTotalPages = () => {
    const tfoot = _getTableEl().tFoot;
    tfoot.querySelector('span').innerText = `/ ${common.getPaginationData().totalPages}`;
}
const _updateRowsMessage = () => {
    const tfoot = _getTableEl().tFoot;
    tfoot.querySelector('span#row-message').innerText = _getRowsInfoMessage();
}
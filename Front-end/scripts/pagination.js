/**
 * 
 * @param {HTMLTableElement} tableElement 
 * @param {{totalRecords: number, totalPages: number}} pageData 
 */
export function Pagination(tableElement, pageData, numOfCols) {
    let currentPage = 1;
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
        th.append(getFirstPageBtn());
        th.append(getPreviousPageBtn());
        th.append(getPageInput());
        th.append(getNextPageBtn());
        th.append(getLastPageBtn());
        th.append(getPageDropdown());
    }
    function getPageInput() {
        const pageField = document.createElement("input");
        pageField.type = "number";
        pageField.classList.add("text-center", "font-size-medium");
        pageField.value = currentPage;
        pageField.min = 1;
        pageField.max = pageData.totalPages;
        pageField.addEventListener("keyup", () => goToPage(event.srcElement.value));
        return pageField;
    }
    function getFirstPageBtn() {
        const btn = getBtn();
        const firstBtn = btn("&#9668;&#9668;");
        setBtnEventTitle(firstBtn, "first", "First");
        return firstBtn;
    }
    function getPreviousPageBtn() {
        const btn = getBtn();
        const prevBtn = btn("&#9664;");
        setBtnEventTitle(prevBtn, "previous", "Previous");
        return prevBtn;
    }
    function getNextPageBtn() {
        const btn = getBtn();
        const nextBtn = btn("&#9654;");
        setBtnEventTitle(nextBtn, "next", "Next");
        return nextBtn;
    }
    function getLastPageBtn() {
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
    function getPageDropdown() {
        const pageDropdown = document.createElement("select");
        [5, 10, 25, 50].forEach(pageSize => {
            let option = new Option(pageSize, pageSize);
            option.className = "page-size-dropdown";
            pageDropdown.options.add(option);
        });
        pageDropdown.options.selectedIndex = 0;
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
        console.log(selectedPageSize);
    }
    /**
     * 
     * @param {'first'|'previous'|'next'|'last'|'page'} direction 
     * @param {number} pageNum
     */
    function moveTo(direction, pageNum) {
        if (direction == "first") {
            goToFirstPage();
        }
        else if (direction == "previous") {
            goToPrevPage();
        }
        else if (direction == "next") {
            goToNextPage();
        }
        else if (direction == "last") {
            goToLastPage();
        }
        else if (direction == "page" && pageNum) {
            goToPage(pageNum);
        }
    }
    function goToFirstPage() {
        console.log("goToFirstPage()");
        goToPage(0);
    }
    function goToNextPage() {
        console.log("goToNextPage()");
    }
    function goToPrevPage() {
        console.log("goToPrevPage()");
    }
    function goToLastPage() {
        console.log("goToLastPage()");
        goToPage(pageData.totalPages);
    }
    /**
     * 
     * @param {number} pageNumber 
     */
    function goToPage(pageNumber) {
        pageNumber = Number(pageNumber);
        console.log("goToPage()");
    }
    setPagination();
}
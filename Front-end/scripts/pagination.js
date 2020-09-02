/**
 * 
 * @param {HTMLTableElement} tableElement 
 * @param {{totalRecords: number, totalPages: number}} pageData 
 */
export function Pagination(tableElement, pageData, numOfCols) {
    function setPagination() {
        const footerFragment = document.createDocumentFragment();
        const tableFooter = document.createElement("tfoot");
        const th = document.createElement("th");
        // th.classList.add("d-flex", "align-items-center", "justify-content-around");
        th.append(getFirstPageBtn());
        th.append(getPreviousPageBtn());
        th.append(getNextPageBtn());
        th.append(getLastPageBtn());
        th.append(getPageDropdown());
        th.colSpan = numOfCols;
        tableFooter.appendChild(th);
        footerFragment.appendChild(tableFooter);
        tableElement.appendChild(footerFragment);
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
            btn.className = "mx-1";
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
        const pageSizeSelect = document.createElement("select");
        [5, 10, 25, 50].forEach(pageSize => {
            let option = new Option(pageSize, pageSize);
            option.className = "page-size-dropdown";
            pageSizeSelect.options.add(option);
        });
        pageSizeSelect.options.selectedIndex = 0;
        pageSizeSelect.classList.add("mx-1", "page-size-dropdown");
        return pageSizeSelect;
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
        console.log("goToPage()");
    }
    setPagination();
}
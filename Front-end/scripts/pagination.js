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
        th.classList.add("d-flex", "align-items-center", "justify-content-around");
        th.append(getFirstPageBtn());
        th.append(getPreviousPageBtn());
        th.append(getNextPageBtn());
        th.append(getLastPageBtn());
        th.colSpan = numOfCols;
        tableFooter.appendChild(th);
        footerFragment.appendChild(tableFooter);
        tableElement.appendChild(footerFragment);
    }
    function getFirstPageBtn() {
        const btn = getBtn();
        const firstBtn = btn("&#9668;");
        firstBtn.addEventListener("click", () => moveTo("first"));
        return firstBtn;
    }
    function getPreviousPageBtn() {
        const btn = getBtn();
        const prevBtn = btn("&#9664;");
        prevBtn.addEventListener("click", () => moveTo("previous"));
        return prevBtn;
    }
    function getNextPageBtn() {
        const btn = getBtn();
        const nextBtn = btn("&#9654;");
        nextBtn.addEventListener("click", () => moveTo("next"));
        return nextBtn;
    }
    function getLastPageBtn() {
        const btn = getBtn();
        const lastBtn = btn("&#9658;");
        lastBtn.addEventListener("click", () => moveTo("last"));
        return lastBtn;
    }
    function getBtn() {
        return function (hexCode) {
            const btn = document.createElement("button");
            btn.innerHTML = hexCode;
            btn.classList.add("p-1");
            return btn;
        }
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
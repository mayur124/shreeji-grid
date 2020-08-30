/**
 * 
 * @param {HTMLTableElement} tableElement 
 * @param {{totalRecords: number, totalPages: number}} pageData 
 */
export function Pagination(tableElement, pageData) {
    function init() {
        console.log(tableElement, pageData);
    }
    function setPagination() {
        const footerFragment = document.createDocumentFragment();
        const tableFooter = document.createElement("tfoot");
        
    }
    init();
}
export function Table(tableElement, tableData) {

    const { data, pageData } = tableData;
    const headers = [];

    function setHeaders(row) {
        for (const key in row) {
            headers.push(key);
        }
    }

    function renderTable() {
        renderHeader();
        renderBody();
    }

    function renderHeader() {
        const headerFragment = document.createDocumentFragment();
        const tableHead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        headers.forEach(header => {
            const headerNode = document.createElement("th");
            headerNode.innerText = header;
            headerNode.className = "header-border";
            headerRow.appendChild(headerNode);
        });
        tableHead.appendChild(headerRow);
        headerFragment.appendChild(tableHead);
        tableElement.appendChild(headerFragment);
    }

    function renderBody() {

    }

    setHeaders(data[0]);
    renderTable();
}
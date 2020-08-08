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
            headerNode.innerText = header.trim();
            headerNode.classList.add('border', 'border-bottom', 'text-upper');
            headerRow.appendChild(headerNode);
        });
        tableHead.appendChild(headerRow);
        headerFragment.appendChild(tableHead);
        tableElement.appendChild(headerFragment);
    }

    function renderBody() {
        const bodyFragment = document.createDocumentFragment();
        const tBody = document.createElement("tbody");
        data.forEach(row => {
            const tRow = document.createElement("tr");
            for (const key in row) {
                const td = document.createElement("td");
                td.innerText = row[key];
                td.classList.add("border", getAlignmentClass(row[key]));
                tRow.appendChild(td);
            }
            tBody.appendChild(tRow);
        });
        bodyFragment.appendChild(tBody);
        tableElement.appendChild(bodyFragment);
    }

    function getAlignmentClass(text) {
        if (typeof text == "string") {
            return "text-left";
        }
        else {
            return "text-right";
        }
    }

    setHeaders(data[0]);
    renderTable();
}
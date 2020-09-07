import * as _table from "./table.js";

const fetchData = async () => {
    await fetch("http://localhost:8099/list")
        .then(response => response.json())
        .then(responseData => {
            if (responseData.data.length > 0) {
                debugger;
                const table = document.querySelector('table');
                _table.initTable(table, responseData.data);
                _table.initPagination(table, responseData.pageData, responseData.data, _getNumOfCols(responseData.data[0]));
            }
        })
        .catch(error => console.log(error));
}

const _getNumOfCols = data => Object.keys(data).length;

document.addEventListener('load', fetchData());
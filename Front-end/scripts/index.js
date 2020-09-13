import { renderTable } from "./table.js";
import { initPagination } from './pagination.js'
import { setTableData } from "./common.js";

const fetchData = async () => {
    await fetch("http://localhost:8099/list")
        .then(response => response.json())
        .then(responseData => {
            if (responseData.data.length > 0) {
                const table = document.querySelector('table');
                setTableData(
                    TableData({
                        tableEl: table,
                        pageData: responseData.pageData,
                        rowData: responseData.data,
                        numOfCols: _getNumOfCols(responseData.data[0]),
                    })
                ).then(() => {
                    renderTable();
                    initPagination();
                }).catch(error =>
                    console.log('Error while setting table data >> ', error)
                );
            }
        })
        .catch(error => console.log(error));
}

const _getNumOfCols = data => Object.keys(data).length;
/**
 * @param {({
 * tableEl: HTMLTableElement, 
 * pageData: {totalRecords: number, totalPages: number},
 * data: any,
 * numOfCols: number
 * })} param0 
 */
const TableData = ({ tableEl, pageData, rowData, numOfCols }) => {
    let _tableEl = tableEl;
    let _pageData = pageData;
    let _rowData = rowData;
    let _columnsCount = numOfCols;
    return {
        getTableElement: () => _tableEl,
        getPageData: () => _pageData,
        getRowData: () => _rowData,
        getColumnCount: () => _columnsCount,
    }
}
document.addEventListener('load', fetchData());
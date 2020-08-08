import { Table } from "./table.js";

document.addEventListener('load', fetchData());

async function fetchData() {
    await fetch("http://localhost:8099/list")
        .then(response => response.json())
        .then(responseData => {
            if (responseData.data.length > 0) {
                const tables = document.querySelectorAll('table');
                tables.forEach(table => {
                    new Table(table, responseData);
                });
            }
        })
        .catch(error => console.log(error));
}
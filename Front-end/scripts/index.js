let data = [];
let pageData = {}

async function fetchData() {
    await fetch("http://localhost:8099/list")
    .then(response => response.json())
    .then(responseData => {
        data = responseData.data;
        pageData = responseData.pageData;
    })
    .catch(error => console.log(error));
}
function DataTable(config, data) {  
  configurations = configurations.set(config,data);
  const content =
    "<table>" + titleRow(config,data) + contentTable(data) + "</table>";
  const tableInBody = document.querySelector(config.parent);
  tableInBody.innerHTML = content;
}

function titleRow(config, data) {
  let result = "<thead> <tr> <th>№</th>";
  for (let element of config.columns) {
    result +=
      `<th onclick="sortingTable('${element.value}', '${config.parent}')">` +
      element.title +
      "</th>";
  }
  result += "</tr> </thead>";
  return result;
}

function contentTable(data) {
  let result = "<tbody>";
  let counter = 0;
  for (let row of data) {
    result += "<tr>";
    for (let dataRowKey in row) {
      result +=
        "<td>" +
        (dataRowKey == "id" ? String(++counter) : row[dataRowKey]) +
        "</td>";
    }
    result += "</tr>";
  }
  result += "</tbody>";
  return result;
}

function sortingTable(nameColumn, tableId) {  
  sortOrder *= -1;
  config = getConfig(tableId)[0];
  const result = getConfig(tableId)[1];
  console.log(result);
  result.sort((a, b) => {
    let A = a[nameColumn];
    let B = b[nameColumn];
    if (!isNaN(parseFloat(A)) && !isNaN(parseFloat(B))) {
      return sortOrder * (parseFloat(A) - parseFloat(B));
    } else {
      if (A > B) return 1 * sortOrder;
      if (A < B) return -1 * sortOrder;
      return 0;
    }
  });

  DataTable(config, result);
};

function getConfig(tableId){
  let foundConfig = null;
  for (const [config, value] of configurations) {
    if (config.parent === tableId) {
      foundConfig = [config, value];
      break;
    }
  }
  return foundConfig;
}
/**
 * Function add table on the HTML code
 * @param {config for table} config
 * @param {users data for table} data
 */
function DataTable(config, data) {
  configurations = configurations.set(config, data); //save creating table in map where key:config, data:users data
  const content =
    "<table>" + titleRow(config) + contentTable(data) + "</table>";
  const tableInBody = document.querySelector(config.parent);
  tableInBody.innerHTML = content;
}
/**
 * Function create on the HTML page title row
 * @param {config for table} config
 * @returns content title row for table with events onClick for columns
 */
function titleRow(config) {
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
/**
 * Function returned on HTML pages users data in table
 * @param {users data for table} data 
 * @returns rows with data for table
 */
function contentTable(data) {
  let result = "<tbody>";
  let counter = 0; // count row in table
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
/**
 * Function realisation sorting method in table after click on title row
 * @param {name column selected} nameColumn 
 * @param {id table selected} tableId 
 */
function sortingTable(nameColumn, tableId) {
  sortOrder *= -1;
  table = getConfig(tableId); //get table with selected id table
  config = table[0];
  const data = table[1];
  data.sort((a, b) => {
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

  DataTable(config, data); //repaint table after sorting
}
/**
 * Function found and returned config and users data from table with tableId
 * @param {selected tableId} tableId 
 * @returns table with config and users data
 */
function getConfig(tableId) {
  let foundConfig = null;
  for (const [config, value] of configurations) {
    if (config.parent === tableId) {
      foundConfig = [config, value];
      break;
    }
  }
  return foundConfig;
}

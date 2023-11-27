/**
 * Function to add a table in the HTML code
 * @param {object} config - Configuration for the table
 * @param {array} data - Users' data for the table
 */
function DataTable(config, data) {
  // Save the created table in a map where key: config, data: users' data
  configurations.set(config, data);

  // Construct the table content
  const content =
    "<table>" + titleRow(config) + contentTable(data) + "</table>";

  // Get the table element in the body
  const tableInBody = document.querySelector(config.parent);

  // Set the content in the table element
  tableInBody.innerHTML = content;
}

/**
 * Function to create the title row on the HTML page
 * @param {object} config - Configuration for the table
 * @returns {string} - Content of the title row for the table with onClick events for columns
 */
function titleRow(config) {
  let result = "<thead> <tr> <th>№</th>";

  // Iterate through columns in the configuration and create th elements
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
 * Function to return user data in a table on HTML pages
 * @param {array} data - Users' data for the table
 * @returns {string} - Rows with data for the table
 */
function contentTable(data) {
  let result = "<tbody>";
  let counter = 0; // count row in table

  // Iterate through each row of data and populate the table cells
  for (let row of data) {
    result += "<tr>";

    for (let dataRowKey in row) {
      result +=
        "<td>" +
        (dataRowKey === "id" ? String(++counter) : row[dataRowKey]) +
        "</td>";
    }

    result += "</tr>";
  }

  result += "</tbody>";
  return result;
}

/**
 * Function implementing the sorting method in the table after clicking on the title row
 * @param {string} nameColumn - Name of the selected column
 * @param {string} tableId - ID of the selected table
 */
function sortingTable(nameColumn, tableId) {
  sortOrder *= -1;

  // Get the table with the selected tableId
  const table = getConfig(tableId);
  let config = table[0];
  const data = table[1];

  // Sort the data based on the selected column
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

  // Repaint the table after sorting
  DataTable(config, data);
}

/**
 * Function to find and return config and user data from a table with tableId
 * @param {string} tableId - Selected tableId
 * @returns {array|null} - Table with config and user data or null if not found
 */
function getConfig(tableId) {
  let foundConfig = null;

  // Iterate through configurations to find the matching tableId
  for (const [config, value] of configurations) {
    if (config.parent === tableId) {
      foundConfig = [config, value];
      break;
    }
  }

  return foundConfig;
}

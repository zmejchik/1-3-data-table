function DataTable(config, data) {
  const content =
    "<table>" + titleRow(config) + contentTable(data) + "</table>";
  const tableInBody = document.getElementById(config.parent.substring(1));
  tableInBody.innerHTML = content;
  // вміст цієї функції вам потрібно написати :)
}

function titleRow(config) {
  let result = "<thead> <tr> <th>№</th>";
  for (let element of config.columns) {
    result =
      result +
      `<th onclick="sortingTable('${element.value}')">` +
      element.title +
      "</th>";
  }
  result = result + "</tr> </thead>";
  return result;
}

function contentTable(data) {
  let result = "<tbody>";
  let counter = 0;
  for (let row of data) {
    result = result + "<tr>";
    for (let dataRowKey in row) {
      result =
        result +
        "<td>" +
        (dataRowKey == "id" ? String(++counter) : row[dataRowKey]) +
        "</td>";
    }
    result = result + "</tr>";
  }
  result = result + "</tbody>";
  return result;
}

const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "Ім’я", value: "name" },
    { title: "Прізвище", value: "surname" },
    { title: "Вік", value: "age" },
  ],
};

const users = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкін", age: 15 },
  { id: 30050, name: "Вася", surname: "Петров", age: 18 },
  { id: 30051, name: "Тарас", surname: "Шевченко", age: 35 },
  { id: 30050, name: "Толя", surname: "Васечкін", age: 47 },
  { id: 30051, name: "Ліна", surname: "Костенко", age: 31 },
  { id: 30051, name: "Лариса", surname: "Косач", age: 25 },
  { id: 30051, name: "Юля", surname: "Мойсик", age: 30 },
];

DataTable(config1, users);
/**Function for sortin column */
let sortOrder = 1;
function sortingTable(nameColumn) {
  sortOrder = sortOrder * -1;
  result = users.sort((a, b) => {
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
  DataTable(config1, result);
  return result;
}
/* if (nameColumn === 'id') return a.id - b.id; */
/* if (nameColumn === 'name') {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    }
    if (nameColumn === 'surname') {
      if (a.surname > b.surname) return 1;
      if (a.surname < b.surname) return -1;
      return 0;
    }
    if (nameColumn === 'age') return a.age - b.age; 
    return true;
  });
  DataTable(config1, result);
}*/
/* Tabulator */
//create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
  height: "100%", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
  data: users, //assign data to table
  layout: "fitColumns", //fit columns to width of table (optional)
  columns: [
    //Define Table Columns
    { title: "Ім'я", field: "name", width: 150 },
    { title: "Прізвище", field: "surname" },
    { title: "Вік", field: "age" },
  ],
});
/**
  * <div id="usersTable">
  <table>
    <thead>
    <tr>
      <th>№</th>
      <th>Ім’я</th>
      <th>Прізвище</th>
      <th>Вік</th>
    </tr>
    </thead>

    <tbody>
    <tr>
      <td>1</td>
      <td>Вася</td>
      <td>Петров</td>
      <td>12</td>
    </tr>

    <tr>
      <td>2</td>
      <td>Вася</td>
      <td>Васечкін</td>
      <td>15</td>
    </tr>
    </tbody>

  </table>
</div>
  */

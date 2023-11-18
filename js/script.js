function DataTable(config, data) {
  const content =
    "<table>" + titleRow(config) + contentTable(data) + "</table>";
  const tableInBody = document.getElementById(config.parent.substring(1));
  tableInBody.innerHTML = content;
  // вміст цієї функції вам потрібно написати :)
}

function titleRow(config) {
  let result = "<thead> <tr> <th>N</th>";
  for (let element of config.columns) {
    result = result + "<th>" + element.title + "</th>";
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
        result + "<td>" + (dataRowKey == "id"
          ? String(++counter)
          : row[dataRowKey]) + "</td>";
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
];

DataTable(config1, users);
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

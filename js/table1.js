let sortOrder = 1;
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

const config2 = {
  parent: "#usersTable1",
  columns: [
    { title: "Ім’я", value: "name" },
    { title: "Прізвище", value: "surname" },
    { title: "Вік", value: "age" },
  ],
};

const users2 = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкін", age: 15 },
  { id: 30050, name: "Вася", surname: "Петров", age: 18 },
  { id: 30051, name: "Тарас", surname: "Шевченко", age: 35 },
  { id: 30050, name: "Толя", surname: "Васечкін", age: 47 },
  { id: 30051, name: "Ліна", surname: "Костенко", age: 31 },
  { id: 30051, name: "Лариса", surname: "Косач", age: 25 },
  { id: 30051, name: "Юля", surname: "Мойсик", age: 30 },
];

DataTable(config2, users2);

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

import Table from './table.js';
import Data from './data.js';

const app = document.getElementById('app');
const table = new Table(5, ['name', 'age', 'email', 'adress', 'pets'])
table.createTable();

(async () => {
  const data = await Data.getUsersData();
  data.forEach(element => {
    table.createRow(element)
  });
})()
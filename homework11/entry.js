import Table from './table.js';
import Data from './data.js';
import Control from './control.js'
const app = document.getElementById('app');
export const table = new Table(6, ['id', 'name', 'age', 'email', 'adress', 'pets'])
table.createTable();

(async () => {
  const data = await Data.getUsersData();
  data.forEach(element => {
    table.createRow(element)
  });
  Control.deleteRow()
  Control.editRow()
})()

table.getRowInfo(document.getElementsByTagName('tr')[0])
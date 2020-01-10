import Table from './table.js';
import Data from './data.js';
import Control from './control.js'

const app = document.getElementById('app');
export const table = new Table(6, ['id', 'name', 'age', 'email', 'adress', 'pets'])
table.createTable()
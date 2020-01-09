export default class Table {
  constructor(width, arrHeadNames) {
    this.width = width;
    this.table = document.createElement('table');
    this.arrHeadNames = arrHeadNames
  }

  createTable() {
    this.createRow(this.arrHeadNames, 'th')
    app.append(this.table);
  }

  createRow(data, typeOfCell = 'td') {
    let userInfo = Object.values(data)
    let row = document.createElement('tr')
    for (let i = 0; i < this.width; i++) { //create cell in row
      let cell = document.createElement(typeOfCell);
      cell.textContent = userInfo[i];
      row.append(cell);
    }
    this.table.append(row);
  }
}
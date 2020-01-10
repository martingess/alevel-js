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
      const dataCell = this.createCell(row, typeOfCell);
      dataCell.textContent = userInfo[i];
    }

    if (typeOfCell === 'td') { //data control buttons
      const controlCell = this.createCell(row)
      this.createControlElement(controlCell, {
        name: "Редактировать",
        class: "edit-btn"
      }, {
        name: "Удалить",
        class: "delete-btn"
      })
    }
    this.table.append(row);

  }

  createCell(row, typeOfCell = 'td') {
    return row.appendChild(document.createElement(typeOfCell))
  }

  createControlElement(cell, btn1, btn2) { //btn - an object, which contains name and class of button

    const editBtn = cell.appendChild(document.createElement('button'));
    const deleteBtn = cell.appendChild(document.createElement('button'));
    editBtn.textContent = btn1.name;
    editBtn.classList.add(btn1.class);
    deleteBtn.textContent = btn2.name;
    deleteBtn.classList.add(btn2.class);
  }
  deleteControllBtns(pressedRow) {
    const controlCell = pressedRow.cells[pressedRow.cells.length - 1];
    while (controlCell.firstChild) {
      controlCell.firstChild.remove()
    }
    return controlCell;
  }

  createInputsInCells(listOfChild) {
    for (let i = 1; i < listOfChild.length - 1; i++) {
      const inputElement = document.createElement('input');
      inputElement.value = listOfChild[i].textContent;
      listOfChild[i].textContent = "";
      listOfChild[i].appendChild(inputElement);
    }
  }
  changeInputsToSimpleField(typeOfAction, row, data) {
    if (typeOfAction === "save") {
      for (let i = 1; i < row.cells.length - 1; i++) { //starts from field "name"
        const textOfInput = row.cells[i].firstChild.value;
        row.cells[i].textContent = textOfInput;
      }
    } else if (typeOfAction === "cancel") {
      const previousCellInfo = Object.values(data);
      for (let i = 0; i < row.cells.length - 1; i++) { //starts from field "id", because data has it 
        row.cells[i].textContent = previousCellInfo[i];
      }
    }
  }

  getRowInfo(row) {
    let result = {};
    for (let i = 0; i < row.cells.length - 1; i++) {
      if (row.cells[i].firstChild.value) { //check if the cell has input
        result[this.arrHeadNames[i]] = row.cells[i].firstChild.value
      } else { //if it hasn't input - try to take its inner text
        result[this.arrHeadNames[i]] = row.cells[i].textContent
      }
    }
    return result;
  }
}
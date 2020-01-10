import Data from './data.js';
import Control from './control.js'

export default class Table {
  constructor(width, arrHeadNames) {
    this.width = width;
    this.table = document.createElement('table');
    this.arrHeadNames = arrHeadNames
    this.typeOfControlBtns = {
      "plane": {
        names: ["редактировать", "удалить"],
        classes: ['edit-btn', 'delete-btn']
      },
      "edit": {
        names: ["сохранить", "отменить"],
        classes: ['save-btn', 'cancel-btn']
      },
      "create": {
        names: ["создать"],
        classes: ["create-btn"]
      }
    }
  }

  async createTable() {
    this.createRow(this.width, this.arrHeadNames, 'th', false)
    app.append(this.table);
    const data = await Data.getUsersData();
    data.forEach(element => {
      this.createRow(this.width, element)
    });
    this.createBtnCreate()
    Control.deleteRow()
    Control.editRow()
  }

  createRow(width, data = {}, typeOfCell = 'td', controlElement = true) {
    let row = document.createElement('tr')
    let userInfo = data ? Object.values(data) : data;
    for (let i = 0; i < width; i++) { //create cell in row
      const dataCell = this.createCell(row, typeOfCell);
      if (data) {
        dataCell.textContent = userInfo[i];
      }
    }
    if (controlElement === true) { //data control buttons
      const controlCell = this.createCell(row)
      this.createControlElement(controlCell, this.typeOfControlBtns["plane"])
    }
    this.table.append(row);
    return row;
  }

  createCell(row, typeOfCell = 'td') {
    return row.appendChild(document.createElement(typeOfCell))
  }

  createControlElement(cell, objWithBtnsInfo) { //btn - an object, which contains name and class of button
    const btn1 = cell.appendChild(document.createElement('button'));
    btn1.classList.add(objWithBtnsInfo.classes[0]);
    btn1.textContent = objWithBtnsInfo.names[0];

    if (Object.values(objWithBtnsInfo.names).length > 1) {
      const btn2 = cell.appendChild(document.createElement('button'));
      btn2.classList.add(objWithBtnsInfo.classes[1]);
      btn2.textContent = objWithBtnsInfo.names[1];
    }
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
  createBtnCreate() {
    const row = this.createRow(this.width + 1, null, "td", false)
    this.createControlElement(row.cells[row.cells.length - 1], this.typeOfControlBtns['create'])
  }
}
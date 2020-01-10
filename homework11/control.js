import Data from './data.js'
import {
  table
} from './entry.js'
export default {
  deleteRow() {
    for (let value of document.getElementsByTagName('tr')) {
      value.onclick = function () { //delete button pressed
        if (event.target.classList.contains('delete-btn')) {
          this.remove()
          const id = this.firstChild.textContent;
          Data.deleteUser(id)
        }
      }
    }
  },
  editRow() {
    for (let value of document.getElementsByTagName('tr')) {
      value.addEventListener('click', editBtnPressed)
    }

    function editBtnPressed() {
      const pressedRow = this;
      if (event.target.classList.contains('edit-btn')) {
        table.createInputsInCells(pressedRow.cells);

        table.createControlElement(table.deleteControllBtns(pressedRow), { //deleteControlBtns returns cell
          name: 'Сохранить',
          'class': 'save-btn'
        }, {
          name: 'Отменить',
          'class': 'cancel-btn'
        });
        createSaveBtnLogic()
        createCancelBtnLogic()

        function createSaveBtnLogic() {
          const listOfSaveBtns = document.getElementsByClassName('save-btn');
          for (let elem of listOfSaveBtns) {
            if (!elem.onclick) {
              elem.onclick = (event) => {
                const row = event.target.closest('tr')
                Data.putUserInfo(row.cells[0].textContent, table.getRowInfo(row)) //send info to server
                table.changeInputsToSimpleField("save", row)
                table.createControlElement(table.deleteControllBtns(row), {
                  name: "Редактировать",
                  class: "edit-btn"
                }, {
                  name: "Удалить",
                  class: "delete-btn"
                });
              }
            }
          }
        }

        function createCancelBtnLogic() {
          const listOfCancelBtns = document.getElementsByClassName('cancel-btn');
          for (let elem of listOfCancelBtns) {
            if (!elem.onclick) {
              elem.onclick = cancelBtnPressed(elem.closest('tr'));

              function cancelBtnPressed(pressedRow) {
                let oldInfoOfCell = table.getRowInfo(pressedRow);
                return event => {
                  const row = event.target.closest('tr')
                  table.changeInputsToSimpleField("cancel", row, oldInfoOfCell)
                  table.createControlElement(table.deleteControllBtns(row), {
                    name: "Редактировать",
                    class: "edit-btn"
                  }, {
                    name: "Удалить",
                    class: "delete-btn"
                  });
                }
              }
            }
          }
        }

      }

    }
  }
}
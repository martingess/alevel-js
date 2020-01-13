export let app = document.getElementById('app');

export class ChatWindow {
  constructor() {
    this.chatBody = app.appendChild(document.createElement('div'));
    this.userInput = app.appendChild(document.createElement('input'))
    this.sendBtn = app.appendChild(document.createElement('button'))
    this.userName = app.appendChild(document.createElement('input'))
  }

  createMessageBody() {
    let message = this.chatBody.appendChild(document.createElement('p'))
    message.classList.add('message-body')
    return message;
  }

  setMessageInfo(messageBody, messageData) {
    let {
      author,
      message,
      timestamp,
      id
    } = messageData;
    messageBody.textContent = `Время: ${timestamp} Имя: ${author}, сообщение: ${message}`;
    messageBody.id = `message${id}`;
  }

  async viewHistory(data) {
    let usersData = await data;
    for (let i = 0; i < usersData.length; i++) {
      this.setMessageInfo(this.createMessageBody(), usersData[i])
    }
  }

  async getLastMessages() {
    let usersData = await data;
    const ourLastMessage = "asd"
  }
}
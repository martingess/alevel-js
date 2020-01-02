//6. Создать button и повесить обработчик. При при нажатии должно выдавать alert("Hey")
const button = document.createElement('button')
button.textContent = 'Hey'
document.body.append(button)
button.onclick = () => alert('hey')
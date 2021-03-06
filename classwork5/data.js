// export default {
  async function getAllMessages() {
    let result = fetch('http://localhost:3000/chat');
    return (await result).json()
  }
  async function postMessage(data) {
    await fetch('http://localhost:3000/chat', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
// }
export default {
  async getUsersData() {
    const response = await fetch('http://localhost:3000/users')
    return response.json();
  },
  async deleteUser(id) {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    })
  },
  async patchUser(userId, patchData) {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patchData)
    })
  }
}
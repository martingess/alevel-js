export default {
  async getUsersData() {
    const response = await fetch('http://localhost:3000/users')
    return response.json();
  }
}
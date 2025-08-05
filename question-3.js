// เริ่มเขียนโค้ดตรงนี้

const resp = await fetch("https://jsonplaceholder.typicode.com/users")
const users = await resp.json()
const names = users.map(user => user.name)
const longNames = names.filter(name => name.length > 17)
console.log(longNames)

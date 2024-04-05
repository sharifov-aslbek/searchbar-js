let ul = document.querySelector(".list")
let inputVal = document.querySelector(".inputVal")
async function getUsers () {
   let response = await fetch("https://jsonplaceholder.typicode.com/users")
   let datas = await response.json()
   return datas
}


async function iteratFront () {
   let users = await getUsers()
   users.forEach(user => {
      let li = document.createElement('li')
      li.innerHTML = user.name
      ul.append(li)
   })
}

iteratFront()


inputVal.addEventListener("input" , async (e) => {
   let currentUsers = e.target.value.toLowerCase()
   let users = await getUsers()
   users = users.filter((user) => user.name.toLowerCase().includes(currentUsers))
   ul.innerHTML = ""
   users.forEach(user => {
      let li = document.createElement("li")
      li.textContent = user.name
      ul.append(li)
   })
})
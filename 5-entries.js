const user = { name: 'John', age: 18, gender: 'male' }

console.log(user)
console.log(Object.entries(user)) // object to array (key, value)

for (let obj of Object.entries(user)) {
    console.log(obj[0], obj[1])
}

const data = [
    ['firstName', 'John'],
    ['lastName', 'Doe'],
    ['age', 18]
]

console.log(data)
console.log(Object.fromEntries(data)) // array to object (key, value)

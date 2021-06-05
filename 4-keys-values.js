const user = { name: 'John', age: 18, gender: 'male' }

console.log(user)
console.log(Object.keys(user)) // object to array
console.log(Object.values(user)) // object to array

for (let key in user) {
    console.log('>', user[key])
}

for (let value of Object.values(user)) {
    console.log('>', value)
}

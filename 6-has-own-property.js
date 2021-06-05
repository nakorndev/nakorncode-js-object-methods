const user = { name: 'John', age: 18, gender: '' }

// male
// female
// (none)

console.log(Boolean(user.name))
console.log(Boolean(user.age))
console.log(Boolean(user.gender))

console.log(user.hasOwnProperty('name'))
console.log(user.hasOwnProperty('age'))
console.log(user.hasOwnProperty('gender'))

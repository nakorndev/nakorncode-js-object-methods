const data = { name: 'John', age: 18 }
const newData = { gender: 'male', age: 19 }

console.log({ data, newData })
console.log({ ...data, ...newData })

console.log(Object.assign(data, newData))

const person = {
    name: 'John',
    age: 18
}

Object.prototype.toString = function () {
    let output = ''
    for (let key in this) {
        // key = name
        // key = age

        // this = { name, age }
        // this.name
        // this[key]
        output += `${key}:${this[key]}; `
    }
    return output
}

console.log(person)
console.log(person.toString())
// alert(person)

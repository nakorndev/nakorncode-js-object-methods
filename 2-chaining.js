const user = {
    name: 'john12',
    jobTitle: 'Programmer',
    permissions: {
        createProject: true,
        updateProject: true,
        deleteProject: false
    }
}

const user2 = {
    name: 'joe13',
    jobTitle: 'Employee'
}

console.log(user.name, user.permissions?.createProject)
console.log(user2.name, user2.permissions?.createProject)

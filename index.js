let employee = {
    name : `Tom`,
    streetAddress : `7 West 34 Street`,
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmplyee = {...employee};

    newEmplyee[`name`] = `Sam`;

    newEmplyee[`streetAddress`] = `11 Broadway`;
    
    return newEmplyee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[`streetAddress`] = `12 Broadway`;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const {name, ...newEmployee} = employee;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;

    return employee;
}
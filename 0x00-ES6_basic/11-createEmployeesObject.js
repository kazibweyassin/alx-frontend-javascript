//object creation and computed property names
export default function createEmployeesObject(departmentName, employees) {
    return {
        [departmentName]: employees
    };
}
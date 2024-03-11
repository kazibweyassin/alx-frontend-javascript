/**
 * Creates a report object based on the provided employees list.
 * @param {Object} employeesList - The list of employees.
 * @returns {Object} - The report object.
 */
export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys({ ...employeesList }).length;
    },

  };
  return report;
}
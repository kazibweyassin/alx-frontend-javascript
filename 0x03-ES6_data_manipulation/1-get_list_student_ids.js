export default function getListStudentIds(students) {
    if (!Array.isArray(students)) {
        return [];
    }
    let ids = students.map((student) => student.id);
    return id;

}
export default function getListStudentIds(students) {
    if (!Array.isArray(students)) {
        return [];
    }
    let ids = [];
    ids = students.map((x) => x.id);
    return ids;
}
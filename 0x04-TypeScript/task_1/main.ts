interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any,
}

interface Directors extends Teacher {
    numberOfReports: number,
}

const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;

/**
 * Represents a student in a class.
 */
class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Returns the current status of the student's homework.
     * @returns The status of the student's homework.
     */
    workOnHomework = () : string => 'Currently working';

    /**
     * Returns the display name of the student.
     * @returns The display name of the student.
     */
    displayName = () : string => this.firstName;
}

interface StudentConstructor {
    (firstName: string, lastName: string): classInterface;
}

const student = new StudentClass("Paul", "jerry");
console.log(student.displayName())
console.log(student.workOnHomework())
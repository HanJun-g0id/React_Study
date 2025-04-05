import React from "react";

const students = [
    {
        id: 1,
        name: "김대현",
    },
    {
        id: 2,
        name: "오현기",
    },
    {
        id: 3,
        name: "신예준",
    },
    {
        id: 4,
        name: "이현서",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;

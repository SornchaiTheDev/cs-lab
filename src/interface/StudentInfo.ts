export interface StudentInfo {
    resCode: string | undefined
    resData: ResDaum[] | undefined
    msg: string
}

export interface ResDaum {
    classroomId: string
    fkStudentCode: string
    fkSubjectId: string
    fkSectionId: number
    subject: Subject
    section: Section
}

export interface Subject {
    subjectId: string
    name: string
}

export interface Section {
    id: number
    sectionId: number
    name: string
    status: number
    fkSubjectId: string
}

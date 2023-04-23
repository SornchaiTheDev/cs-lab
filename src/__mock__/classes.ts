import { ResDaum, Section, Subject } from '@/interface/StudentInfo'

export const classes: ResDaum[] = [
    {
        classroomId: 'CS112',
        fkSectionId: 1,
        fkStudentCode: '6510405814',
        fkSubjectId: 'cs112',
        section: {
            sectionId: 1,
            name: 'Fundamental Programming Concepts',
        } as Section,
        subject: {
            subjectId: 'cs112',
            name: 'Fundamental Programming Concepts',
        } as Subject,
    },
    {
        classroomId: 'CS113',
        fkSectionId: 1,
        fkStudentCode: '6510405814',
        fkSubjectId: 'cs113',
        section: {
            sectionId: 1,
            name: 'Computer Programming',
        } as Section,
        subject: {
            subjectId: 'cs113',
            name: 'Computer Programming',
        } as Subject,
    },
]

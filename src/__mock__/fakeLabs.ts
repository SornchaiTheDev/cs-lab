import ProblemI from '@/interface/Problem'
import { ResDaum } from '@/interface/GetLabs'

export const fakeLabs: ResDaum[] = [
    {
        name: 'CS Python Lab 01 Input Process Output',
        labId: '101',
        fkSubjectId: 'cs112',
        sectionId: 1,
        sectionName: '1',
        status: 2,
        type: 'LS',
        problems: [
            { name: "01 Elab's Automatic Grading", status: 'success' },
            { name: "02 Elab's Manual Grading", status: 'failed' },
            { name: '03 Reusing Submitted Answer', status: 'success' },
            { name: '04 Variable and Basic Output', status: 'success' },
            { name: '05 Expression', status: 'success' },
            { name: '06 Basic Input', status: 'none' },
            {
                name: '07 - Exercise 1.1: Input Process Output',
                status: 'failed',
            },
            {
                name: '08 Exercise 1.2: Input Process Output',
                status: 'success',
            },
        ],
    },
    {
        name: 'CS Python Lab 01 Problems',
        labId: '102',
        fkSubjectId: 'cs112',
        sectionId: 1,
        sectionName: '1',
        status: 2,
        type: 'PB',
        problems: [
            { name: '01 แปลงอุณหภูมิ', status: 'success' },
            {
                name: '02 แตกหน่วยวินาที',
                status: 'success',
            },
            {
                name: '03 จะบวกแบบไหน',
                status: 'success',
            },
            {
                name: '04 คะแนนสอบ',
                status: 'success',
            },
            {
                name: '05 ค่าตัดหญ้า',
                status: 'success',
            },
            {
                name: '06 พิมพ์ดาวบรรทัดเดียว',
                status: 'success',
            },
        ],
    },
    {
        name: 'CS Python Lab 02 Formatted Output',
        labId: '103',
        fkSubjectId: 'cs112',
        sectionId: 1,
        sectionName: '1',
        status: 1,
        type: 'LS',
        problems: [
            { name: '01 Formatted Output 1: Easiest Way', status: 'success' },
            {
                name: '02 Formatted Output 2: String Concatenate Operator',
                status: 'success',
            },
            {
                name: '03 Formatted Output 3: String Method format()',
                status: 'success',
            },
            {
                name: '04 Formatted Output 4: String Interpolation Operator',
                status: 'success',
            },
            {
                name: '05 Formatted Output 5: Formatted String Literal',
                status: 'success',
            },
        ],
    },
    {
        name: 'CS Python Lab 02 Problems',
        labId: '104',
        fkSubjectId: 'cs112',
        sectionId: 1,
        sectionName: '1',
        status: 1,
        type: 'PB',
        problems: [
            { name: '01 พื้นที่และเส้นรอบวง', status: 'none' },
            {
                name: '02 สระว่ายน้ำ',
                status: 'none',
            },
            {
                name: '03 พิมพ์ตามสั่ง',
                status: 'none',
            },
            {
                name: '04 ผลรวมเศษส่วน',
                status: 'none',
            },
            {
                name: '05 เติมน้ำมัน',
                status: 'none',
            },
            {
                name: '06 พิมพ์ดาวบรรทัดเดียวสลับกัน',
                status: 'none',
            },
            {
                name: '07 ฟังก์ชันทางคณิตศาสตร์',
                status: 'none',
            },
        ],
    },
    {
        name: 'CS Python Lab 03 Conditional Statement',
        labId: '105',
        fkSubjectId: 'cs112',
        sectionId: 1,
        sectionName: '1',
        status: 1,
        type: 'LS',
        problems: [
            { name: '01 Conditional Statement', status: 'success' },
            {
                name: '02 Boolean Expression: Relational Operators',
                status: 'success',
            },
            {
                name: '03 Boolean Expression: Logical Operators',
                status: 'success',
            },
            {
                name: '04 แปลงอุณหภูมิ 2',
                status: 'success',
            },
        ],
    },
    {
        name: 'CS Python Lab 03 Problems',
        labId: '106',
        fkSubjectId: 'cs112',
        sectionId: 1,
        sectionName: '1',
        status: 1,
        type: 'PB',
        problems: [
            { name: '01 BMI', status: 'success' },
            {
                name: '02 บริษัท ACME',
                status: 'success',
            },
            {
                name: '03 ค่าจอดรถ',
                status: 'success',
            },
            {
                name: '04 Stamp',
                status: 'success',
            },
            {
                name: '05 Guessing 1',
                status: 'success',
            },
            {
                name: '06 Admin Account',
                status: 'success',
            },
            {
                name: '07 Calculate f(x)',
                status: 'success',
            },
        ],
    },
    {
        name: 'CS Python Lab 04 Problems',
        labId: '107',
        fkSubjectId: 'cs112',
        sectionId: 1,
        sectionName: '1',
        status: 1,
        type: 'PB',
        problems: [
            { name: '01 Guessing 2', status: 'success' },
            {
                name: '02 เมนู',
                status: 'success',
            },
            {
                name: '03 Electric Appliance Store',
                status: 'success',
            },
            {
                name: '04 Buffet',
                status: 'failed',
            },
            {
                name: '05 มาตรการเงินโอน แก้จน คนขยัน',
                status: 'success',
            },
            {
                name: '06 ปีอธิกสุรทิน (leap year)',
                status: 'not-attempted',
            },
            {
                name: '07 จับโปเกมอน',
                status: 'not-attempted',
            },
            {
                name: '08 เทหรือไม่เท',
                status: 'not-attempted',
            },
        ],
    },
]

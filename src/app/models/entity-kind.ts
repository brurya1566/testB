export class EntityKind {
    code: number;
    description: string;

    constructor(code: number,description: string) {
        this.code = code;
        this.description = description;
    }
}
export const entityList: EntityKind[] = [//אמור להגיע בעיקרון מטבלת ערכים בצד שרת
    {code:1,description:'איחוד, ארגון או חבר של מדינות זרות (בסעיף זה - איחוד מדינות זרות).'},
    {code:2,description:'אורגן (חלק), רשות או נציגות של מדינה זרה או של איחוד מדינות זרות.'},
    {code:3,description:'רשות מקומית או מחוזית, רשות שלטונית של מדינה זרה או של מדינה שחברה בברית מדינות במדינה זרה (בסעיף זה גוף זר).'},
    {code:4,description:'איחוד, ארגון או חבר של גופים זרים.'},
    {code:5,description:'הרשות הפלסטינית'},
];
export class CurrencyType {
    code: number;
    description: string;

    constructor(code: number,description: string) {
        this.code = code;
        this.description = description;
    }
}
export const currencyList:CurrencyType[]=[//אמור להגיע בעיקרון מטבלת ערכים בצד שרת
    {code:1,description:'דולר'},
    {code:1,description:'שקל'},
    {code:1,description:'יורו'}
  ];

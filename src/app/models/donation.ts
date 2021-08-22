export class donation {
    associationCode: number=0;
    donationId: number=0;
    entityName: string='';
    sum: number=0;
    entityKindCode: number=0;
    donationPurpose: string='';
    donationConditions: string='';
    currencyTypeCode: number=0;
    forex:number=0;

    public constructor(
        fields?: {
            associationCode?: number,
            donationId?: string,
            entityName?: number,
            sum?: string,
            entityKindCode?: string,
            donationPurpose?: number,
            donationConditions?: string,
            currencyTypeCode?: string,
            forex?: number
        }) {
        if (fields) Object.assign(this, fields);
    }

    // constructor(associationCode?: number, donationId: number, EntityName: string, sum: number, EntityKindCode: number, DonationPurpose: string,DonationConditions:string,CurrencyTypeCode:number,forex:number) {
    //     associationCode?this.associationCode = associationCode;
    //     this.donationId = donationId;
    //     this.entityName = EntityName;
    //     this.sum = sum;
    //     this.entityKindCode = EntityKindCode;
    //     this.donationPurpose = DonationPurpose;
    //     this.donationConditions=DonationConditions
    //     this.currencyTypeCode=CurrencyTypeCode;
    //     this.forex=forex;
    // }
}
export class SearchViewModel {
    text: string = "";
    cityid: number = 0;
    countryid: number =0 ;
    areaid: number = 0;
    categoryid: number = 0;
    isfeatured: boolean = false;
 
    constructor() {
        this.text="";
        this.cityid=-1;
        this.countryid=-1;
        this.areaid=-1;
        this.categoryid=-1;
        this.isfeatured=false;
        
    }
}

import { CitylistViewModel } from './city-list-view-model';

export class CountriesViewModel
{
    ID:number=0;
    Name:string="";
    MobileNumberCode:string="";
    Cities:CitylistViewModel[]=[];
    CityID:number=0;
    CityBanner:string="";
}
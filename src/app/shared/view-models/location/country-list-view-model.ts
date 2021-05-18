import { RegionViewModel } from './region-view-model';
import { CitylistViewModel } from './city-list-view-model';

export class CountryListViewModel
{
    ID:number;
    Name:string;
    //Regions:RegionViewModel[]=[];
    Cities:CitylistViewModel[]=[];
}
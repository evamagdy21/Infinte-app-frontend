import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from '../../shared/services/localization.service';
import { Subscription } from 'rxjs';
import { CityBannerChangeService } from 'src/app/shared/services/city-banner-change.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lang: string;
  isAr: boolean;
  subscription: Subscription;
  CityBanner: string ="../../../assets/images/MainBanner.jpg"; 
  CityID: number = -1;
  CategoryID: number = -1;
  constructor( private translate: TranslateService,private localizationService: LocalizationService, private citybannerchangeService:CityBannerChangeService, private route: Router) {
    this.translate.use(localizationService.getLanguage());
    this.lang = localizationService.getLanguage();
    this.loadLanguage();

    
    this.subscription = this.citybannerchangeService.getLocationInfo().subscribe(data => {

      console.log('observal;lll')
      console.log(data)
       this.CityBanner=data.banner;
       this.CityID=data.cityId;
     });
   }

  ngOnInit(): void {
  }
  loadLanguage() {
    let lang: string = this.localizationService.getLanguage();
    if (lang == 'ar') {
      this.isAr = true;
    } else {
      this.isAr = false;
    }
  }

  Search() {

    let params: any = {};

    if (this.CityID != -1) {
      params.cityId = this.CityID;
    }
    if (this.CategoryID != -1) {
      params.categoryId = this.CategoryID;
    }

    this.route.navigate(['/search'], { queryParams: params });
  }

}

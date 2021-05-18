import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/shared/services/localization.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  CityBanner: string ;
  constructor(private translate: TranslateService, private localizationService: LocalizationService,) { 
    this.translate.use(this.localizationService.getLanguage());
  }

  ngOnInit(): void {
  }

}

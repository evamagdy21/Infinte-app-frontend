import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/shared/services/localization.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private translate: TranslateService, private localizationService: LocalizationService, ) { 
    this.translate.use(this.localizationService.getLanguage());
  }

  ngOnInit(): void {
  }

}

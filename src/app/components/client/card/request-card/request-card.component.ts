import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/shared/services/localization.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent implements OnInit {

  constructor(private translate: TranslateService, private localizationService: LocalizationService,) { 
    this.translate.use(this.localizationService.getLanguage());
  }

  ngOnInit(): void {
  }

}

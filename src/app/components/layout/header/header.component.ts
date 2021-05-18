import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { LocalizationService } from 'src/app/shared/services/localization.service';
import { TranslateService } from '@ngx-translate/core';
import { TokenService } from 'src/app/shared/services/token.service';
import { ListViewModel } from 'src/app/shared/view-models/list-view-model';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang: string;
  className: any;
  // searchQuery: SearchViewModel = new SearchViewModel();
  classActive: any;
  elementPosition: any;
  imgSrc: string;
  IsVisible: boolean = true;
  CityBanner: string = "../../../assets/images/MainBanner.jpg";
  active: any;
  IsAuthorized: boolean = false;
  isSelected: boolean = false;
  UserName: string = ""
  // Countries: CountriesViewModel[] = [];
  CountryID: number = 0;
  CityID: number = 0;
  Languages: ListViewModel[] = [];
  // Cities: CitylistViewModel[] = [];
  LangID: number = 1;
  NotificationCount: number = 0;
  countryCode: string = "";
  @ViewChild('stickyMenu', { static: false }) menuElement: ElementRef;
  constructor(private localizationService: LocalizationService,
    private translate: TranslateService,
    private tokenService: TokenService,
    private route: Router, private platformLocation: PlatformLocation, private sharedService: SharedService,) {
    this.translate.use(localizationService.getLanguage());
    this.lang = localizationService.getLanguage();
  }

  ngOnInit(): void {

    this.LangID = (this.tokenService.GetlangID() == -1) ? 1 : this.tokenService.GetlangID();
    this.FillLang();
    this.isAuthorized();
  }

  changeLanguage(e) {

    console.log('this.Languages')
    console.log(this.Languages)


    let oldLang = this.localizationService.getLanguage();
    let langName = this.Languages.filter(lan => lan.ID == e.target.value)[0].Name;
    if (oldLang != langName) {

      this.tokenService.setlangID(e.target.value);

      window.location.reload();
      this.localizationService.setLanguage(langName);

      let Url = (this.platformLocation as any).location.href.toString().replace(oldLang, this.localizationService.getLanguage());

      (window as any).open(Url, "_Self");


      this.translate.use(this.localizationService.getLanguage());
    }


  }
  FillLang() {

    let lang1: ListViewModel = new ListViewModel()
    lang1.ID = 1;
    lang1.Name = "ar"
    let lang2: ListViewModel = new ListViewModel()
    lang2.ID = 2;
    lang2.Name = "en";
    this.Languages.push(lang1);
    this.Languages.push(lang2)

  }
  isAuthorized(): boolean {
    return this.IsAuthorized = this.tokenService.hasAccessToken();
  }
  ChangeAccountMenu(e) {
    let id = e.target.value;
    if (id == 1) {
      this.route.navigate(['/my-profile']);
    }
    if (id == 2) {
      this.route.navigate(['/my-favourite-list']);
    }
    if (id == 3) {
      this.route.navigate(['/complaints']);
    }
    if (id == 4) {
      // this.LogOut()
    }


  }
  login() {
    this.route.navigateByUrl("/login");
  }
  GoToRequestCard() {
    this.route.navigate(['/request-card']);
  }


}

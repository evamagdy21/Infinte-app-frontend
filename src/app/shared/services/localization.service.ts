import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(public translate: TranslateService) { }
  getBaseLanguage(): string {
    let url: string = location.href;
    if (this.getLanguage() == 'en') {
      return "/en";
    }
    else {
      return "/ar";
    }
  }
  setLanguage(lang: string):any {
  
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem("lang", lang.toLowerCase());
  }


  setHasSubscription(hasSubscription:string) {

    localStorage.setItem("hasSubscription",hasSubscription);
  }



  GetHasSubscripyion() {
    let hasSubscription: string = localStorage.getItem("hasSubscription");
    return (hasSubscription != null && hasSubscription != "" && hasSubscription != "undefined")
  }



  hasLanguage() {
    let lang: string = localStorage.getItem("lang");
    return (lang != null && lang != "" && lang != "undefined")
  }

  getLanguage() {
    let lang: string = localStorage.getItem("lang");
    if (lang == "" || lang == null || lang == 'undefined') {
      return this.getDefaultLanguage();
    }
    return lang;
  }

  private getDefaultLanguage() {
    return "ar";
  }
}

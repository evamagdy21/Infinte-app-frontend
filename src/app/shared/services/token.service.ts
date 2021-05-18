import { Injectable, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CountriesViewModel } from '../view-models/location/countries-view-model';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenStorageName: string = "userToken";
  country:CountriesViewModel =new  CountriesViewModel ();
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) { }

    setCountryInfo(countryId:number,countryCode:string,cityID:number=0,cityBanner:string="")
    {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("CountryID", countryId.toString());
        localStorage.setItem("CountryCode", countryCode);
        localStorage.setItem("CityID", cityID.toString());
        localStorage.setItem("CityBanner", cityBanner);
      }
    }
    GetCountryInfo():CountriesViewModel
    {
      let CountryId= localStorage.getItem("CountryID");
      let CountryCode=localStorage.getItem("CountryCode");

      let CityId= localStorage.getItem("CityID");
      let cityBanner=localStorage.getItem("CityBanner");
    
        this.country.ID=(CountryId !=null && CountryId !="")?parseInt(CountryId):-1;
  
        this.country.MobileNumberCode=(CountryCode !=null && CountryCode !="")?CountryCode:"";
     

        this.country.CityID=(CityId !=null && CityId !="")?parseInt(CityId):-1;
     
    
        this.country.CityBanner=(cityBanner !=null && cityBanner !="")?cityBanner:"";
     
      return  this.country;
    }


    setlangID(langId:number)
    { 
       if (isPlatformBrowser(this.platformId)) 
       {
         localStorage.setItem("LangID",langId.toString());
       }
    }

    GetlangID()
    { 
      let LangID=localStorage.getItem("LangID");
      
      if(LangID !=null && LangID !="")
      {
        return parseInt(LangID);
      }
      else{
          return -1;
      }
    
    }
  

  setToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenStorageName, token);
    }
  }


  setUserName(Name: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("UserName", Name);
    }
  }
  GetUserName() {

    let Name: string = localStorage.getItem("UserName");
    if (Name == null || Name === 'undefined') {
      return '';
    }
    return Name;
  }

  setUserEmail(email: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("UserEmail", email);
    }
  }
  GetUserEmail() {

    let email: string = localStorage.getItem("UserEmail");
    if (email == null || email === 'undefined') {
      return '';
    }
    return email;
  }
  setUserPhone(phone: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("UserPhoneNumber", phone);
    }
  }

  setUserID(UserID: Number) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("UserID",UserID.toString());
    }
  }
    
  GetUserID(){

    let UserID:string= localStorage.getItem("UserID");
    if (UserID == null || UserID === 'undefined') {
      return 0;
    }
    return parseInt(UserID);
  }
  
  GetUserPhone() {

    let phone: string = localStorage.getItem("UserPhoneNumber");
    if (phone == null || phone === 'undefined') {
      return '';
    }
    return phone;
  }

  SetCardRequestStatus(statusId: number) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("CardRequestStatus",statusId.toString());
    }
  }

  GetCardRequestStatus() {

    let StatusId: string = localStorage.getItem("CardRequestStatus");
    if (StatusId == null || StatusId === 'undefined') {
      return -1;
    }
    return parseInt(StatusId);
  }
  

  

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      const token: string = localStorage.getItem(this.tokenStorageName);
      if (token == null || token === 'undefined') {
        return '';
      }
      return token;
    }
    return '';
  }
  removeToken() {

    console.log("remove item");
    localStorage.setItem(this.tokenStorageName, '');
    localStorage.removeItem(this.tokenStorageName);
    localStorage.setItem('UserName', "");
    localStorage.removeItem("UserName");
    localStorage.clear();
  }


  hasAccessToken(): boolean {
    return (localStorage.getItem("userToken") != null && localStorage.getItem("userToken").length > 0)
  }
}
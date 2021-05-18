import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CityBannerChangeService {
  private subject = new Subject<any>();
  constructor() { }



  SendLocationInfo(banner: string,cityID:number) {
      this.subject.next({ banner: banner ,cityId:cityID});
  }


  getLocationInfo(): Observable<any> {
      return this.subject.asObservable();
  }
}


import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/shared/services/localization.service';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ResultViewModel } from 'src/app/shared/view-models/result-view-models';
import { ClientRegisterViewModel } from '../../../shared/view-models/client/client-register-view-model';
import { SharedService } from 'src/app/shared/services/shared.service';
import { TokenService } from 'src/app/shared/services/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ActiveFlag: boolean;
  resultRegisterviewmodel: ResultViewModel;
  LoginForm: FormGroup;
  resultviewmodel: ResultViewModel;
  //---------------------------Register-------------------------------------
  Rgistermodel: ClientRegisterViewModel = new ClientRegisterViewModel();
  Form: FormGroup;
  PhoneNumberRgister: string = "";
  resultviewmodelOfRegister: ResultViewModel;
  isAr: boolean;
  CountryCode: string = "";

  constructor(private translate: TranslateService, private localizationService: LocalizationService,
    private sharedService: SharedService,
    private formbuilder: FormBuilder,
    private tokenService: TokenService,) {
    this.translate.use(this.localizationService.getLanguage());
  }

  ngOnInit(): void {
  }
  CreateLoginForm(): void {
    this.LoginForm = this.formbuilder.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  ActiveFunction(Flag: boolean) {
    this.ActiveFlag = Flag;
    console.log(this.ActiveFlag);

  }
}

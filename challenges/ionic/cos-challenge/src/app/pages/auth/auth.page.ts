import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthFacade } from '@cos-store/auth';

@Component({
  selector: 'cos-auth',
  templateUrl: './auth.page.html',
  styleUrls: [ './auth.page.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPage implements OnInit {

  authForm = this.fb.group({
    email: [ '', Validators.required ],
    password: [ '', Validators.required ]
  });

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) { }

  ngOnInit() {
  }

  onLoginUser() {
    console.log('login');
    this.authFacade.login(this.authForm.value);
  }
}

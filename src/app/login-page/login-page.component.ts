import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ApiServiceService } from '../../service/api-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private api: ApiServiceService) { }
  userForm: FormGroup;
  ngOnInit() {

    this.userForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

  }
  onSubmit() {
    console.log('s');
    this.api.login(this.userForm.get('email').value, this.userForm.get('password').value).subscribe((res) => {
      if (res) {
        console.log('token: ' , res.headers.get('Authorization'));
        
        localStorage.setItem('token' ,res.headers.get('Authorization') ) ;
        this.router.navigate(["/home"]);
      }
    })
  }
}

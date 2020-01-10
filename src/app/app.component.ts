import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testingForNewWork';
  userForm: FormGroup;
  constructor(private fb : FormBuilder, private api : ApiServiceService){

    this.userForm = this.fb.group({
      email : ['',[Validators.required , Validators.email]  ],
      password : ['' , Validators.required]
    })
    
  }

  onSubmit(){
    console.log('sda');
    
    // let userData={
    //   username : 'shiro_119311@yahoo.com',
    //   password: 'QZ7XLA'
    // }

    // this.api.login(userData.username , userData.password).subscribe((res)=>{
    //     console.log('login user: ' , res.headers.get('Authorization'));
        
    // })
  }

  
}



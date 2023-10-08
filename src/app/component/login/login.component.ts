import { Component, Input } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(){}
  public user = {
    name : "",
    age : "",
    mail : "",
    city : "",
  }
  // dataToNav : string = this.user  
  // ngOnInit() : void{}
  submitLogin(){
    alert('Submit?')
    console.log(this.user)

  }

}

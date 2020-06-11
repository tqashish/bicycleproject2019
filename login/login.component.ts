import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisrService } from '../regisr.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform=new FormGroup({
    uname: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private r:Router,private t:RegisrService) { }

  ngOnInit() { }

  go()
  {
    this.r.navigate(['/reg']);
  }
  temp:any={};

  sat()
  {
    this.t.logi(this.loginform.value).subscribe(r=>
      {
        this.temp=r;

        if(this.temp.status=='user')
        {          
          alert("User's successfull Login");
          this.r.navigate(['/uview'])
        }
        else if(this.temp.status=='admin')
        {
          alert("successfull Login admin");
          this.r.navigate(['/Addbiicycle'])
        }
        else
        {
          alert("Sorry!!!Please Enter Valid Email or Password");
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Signup } from '../shared/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signup: Signup=new Signup();
  
  constructor(
    private router:Router,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.authService.signUp(this.signup).subscribe((data:any)=>{
      this.router.navigate(['/auth/login'])
    }
    );
  }

}

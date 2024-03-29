import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CoachService } from 'src/app/trainers/services/coach.service';
import { UserService } from 'src/app/user/services/user.service';
import { User } from 'src/app/user/types/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newUser: any;
  message!: string;
  display!: string;
  successful:boolean;
  bodyMessage!: string;
  registerButtonText!: string;
  uploadedImage!: File;
  coachCheck!:boolean;
  constructor(private userService:UserService,
    private authService:AuthService,
    private router: Router,
    private coachService:CoachService){
    this.newUser={
      id:0,
      name:"",
    lastName:"",
    age:0,
    phoneNumber:0,
    email:"",
    address:"",
    password:"",
    solde:0,
    image:"",
    orders:[]
    }
    this.successful=false;
  }
  register(){

    this.authService.register(this.newUser,this.coachCheck).subscribe(
      (res)=> {
      this.message="Registration was successful!"

      this.registerButtonText="Continue";
      if(this.uploadedImage)
      {
        if(this.coachCheck)
        this.coachService.uploadUserPhoto(this.uploadedImage).subscribe()

        else
        this.userService.uploadUserPhoto(this.uploadedImage).subscribe()

      }      

      this.successful=true;
      this.openModal();
    },
      (err)=> {
        console.log(err);
        
      this.message="Registration Failed!";
      this.bodyMessage="An account with this email address already exists!"
      this.registerButtonText="Try Again";
      this.openModal();
      }

    )
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
    if(this.successful)
    {
      this.router.navigate(['/login']);
    }
  }
  onFileSelected(event: any): void {
    this.uploadedImage=event.target.files[0];
    console.log(this.uploadedImage);

  }



}

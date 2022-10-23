import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {
  displayLoader = false;
  options: AnimationOptions = {
    path: './assets/animation.json',
  };

  constructor(public authService: AuthService) {}

  ngOnInit() {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  microsoftAuth(){
    this.authService.MicrosoftAuth().then(
      res =>{
        this.displayLoader = res;
      }
    );
  }

  twitterAuth(){
    this.authService.TwitterAuth().then(
      res =>{
        this.displayLoader = res;
      }
    );
  }

  facebookAuth(){
    this.authService.FacebookAuth().then(
      res =>{
        this.displayLoader = res;
      }
    );
  }

  googleAuth(){
    this.authService.GoogleAuth().then(
      res =>{
        this.displayLoader = res;
      }
    );
  }
}

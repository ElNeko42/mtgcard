import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe((token: string) => {
      localStorage.setItem('token', token);
      console.log('Logged in successfully');
    });
  }
}

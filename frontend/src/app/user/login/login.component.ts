import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class LoginComponent implements OnInit {
  loginData: { email: string, password: string } = { email: '', password: '' };
  token: string = '';
  errorMessage: string = '';

  constructor(private crudService: CrudService) { }

  ngOnInit(): void { }

  login(): void {
    this.crudService.loginUser(this.loginData).subscribe({
      next: (response) => {
        this.token = response.token;
        localStorage.setItem('authToken', this.token);
        window.location.href = '/employees';
      },
      error: (err) => {
        this.errorMessage = 'Invalid credentials. Please try again.';
        console.error('Login failed', err);
      }
    });
  }
}

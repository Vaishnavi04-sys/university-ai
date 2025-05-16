import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticatorService } from '../authenticator.service';
import { last, Subscription } from 'rxjs';
import { GoogleAuthService } from '../google-auth.service';
import { LoadingSpinnerComponent } from "../../shared/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, LoadingSpinnerComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  message: string = '';
  isLoading: boolean = false;
  private authSubscribe: Subscription | undefined;

  constructor(private authService: AuthenticatorService, private router: Router, private googleAuthService: GoogleAuthService) {
    this.registerForm = new FormGroup({
      user_name: new FormControl('',[Validators.required]),
      first_name: new FormControl('',[Validators.required]),
      last_name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.message = 'Please enter a valid details.';
      return;
    }
    this.isLoading = true;
    const email = this.registerForm.value.email;
    const user_name = this.registerForm.value.user_name;
    const first_name = this.registerForm.value.first_name;
    const last_name = this.registerForm.value.last_name;
    this.authSubscribe = this.authService.registerUser(user_name,first_name,last_name,email).subscribe(
      (requestData) => {
        console.log(requestData);
        this.isLoading = false;
        this.message = 'User registered successfully. Redirecting to login page...';

        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 3000);
      },
      error => {
        console.log(error.error);
        this.isLoading = false;
        this.message = error.error;
      }
    );
  }

  loginWithGoogle() {
    this.isLoading = true;
    this.googleAuthService.signInWithGoogle();
  }

  closeMessage(){
    this.message = ''
  }

  ngOnDestroy(){
    this.authSubscribe?.unsubscribe()
  }
}

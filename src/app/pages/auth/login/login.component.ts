import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    // redirect to profile if already logged in
    if (this.userService.currentUserValue.token) {
      this.router.navigate(['/user/profile']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/user/profile'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/user/profile';
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) return;

    this.loading = true;
    const body = {
      username: this.form['email'].value,
      password: this.form['password'].value,
    };

    this.userService
      .login(body)
      .pipe(first())
      .subscribe({
        next: () => this.router.navigate([this.returnUrl]),
        error: () => (this.loading = false)
      });
  }
}

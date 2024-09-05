import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProfileComponent } from './pages/auth/profile/profile.component';
import { ApiAuthInterceptor } from './interceptors/api-auth-interceptor';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CookieModule } from 'ngx-cookie';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProfileComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent,
        ReportsComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        CookieModule.withOptions(),
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule], providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ApiAuthInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
export class AppModule {}

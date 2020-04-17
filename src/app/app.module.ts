import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login.component';
import { RegisterComponent } from './components/users/register.component';
import { PageNotFoundComponent } from './components/common/page-not-found.component';
import { DashboardComponent } from './components/users/dashboard.component';
import { ProfileComponent } from './components/users/profile.component';
import { MapsComponent } from './components/users/maps.component';
import { HomeComponent } from './components/common/home.component';
import { HeaderComponent } from './components/common/header.component';
import { FooterComponent } from './components/common/footer.component';

// 'AIzaSyACkYvi1c0PxR1LHhwHjoVmwlx5XTWjC7M', // map API keys dev
// 'AIzaSyCDhjF3LNn2qqYUivCkiyYD8lQMAzihz7I', // FOUND IN GOOGLE, Not to use in prod

@NgModule({
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCDhjF3LNn2qqYUivCkiyYD8lQMAzihz7I',
          libraries: ['places']
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        PageNotFoundComponent,
        DashboardComponent,
        ProfileComponent,
        MapsComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

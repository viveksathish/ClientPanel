import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';


// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Service Imports
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard'; 
import { RegisterGuard } from './guards/register.guard';
import { SettingsService } from './services/settings.service';


const appRoutes: Routes = [
    {pathMatch:'full', path:'', component: DashboardComponent, canActivate:[AuthGuard]},
    {pathMatch:'full', path:'register', component: RegisterComponent, canActivate:[RegisterGuard]},
    {pathMatch:'full', path:'login', component: LoginComponent},
    {pathMatch:'full', path:'add-client', component: AddClientComponent, canActivate:[AuthGuard]},
    {pathMatch:'full', path:'client/:id', component: ClientDetailsComponent, canActivate:[AuthGuard]},
    {pathMatch:'full', path:'edit-client/:id', component: EditClientComponent, canActivate:[AuthGuard]},
    {pathMatch:'full', path:'settings', component: SettingsComponent, canActivate:[AuthGuard]},
    {pathMatch:'full', path:'**', component: PageNotFoundComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyCcgzm2FySSDmWagmGwHOOT1FerfeoO8eg",
  authDomain: "clientpanel-6aeca.firebaseapp.com",
  databaseURL: "https://clientpanel-6aeca.firebaseio.com",
  storageBucket: "clientpanel-6aeca.appspot.com",
  messagingSenderId: "369541510685"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard,
    RegisterGuard,
    SettingsService,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

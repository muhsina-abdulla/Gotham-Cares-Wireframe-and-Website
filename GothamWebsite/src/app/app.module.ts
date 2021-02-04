import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MottoComponent } from './motto/motto.component';
import { MainImageComponent } from './main-image/main-image.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { SecondnavComponent } from './secondnav/secondnav.component';
import { OutletVolComponent } from './outlet-vol/outlet-vol.component';
import { VolRegisterComponent } from './vol-register/vol-register.component';
import { AddOutletWindowComponent } from './add-outlet-window/add-outlet-window.component';
import { EditDeleteOutletComponent } from './edit-delete-outlet/edit-delete-outlet.component';
import { EditformComponent } from './editform/editform.component';

import { AdminComponent } from './admin/admin.component';
import { SighnInComponent } from './sighn-in/sighn-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    MottoComponent,
    MainImageComponent,
    WelcomeComponent,
    FooterComponent,
    SecondnavComponent,
    OutletVolComponent,
    VolRegisterComponent,
    AddOutletWindowComponent,
    EditDeleteOutletComponent,
    EditformComponent,
    AdminComponent,
    SighnInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

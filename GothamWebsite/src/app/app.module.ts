import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { DeleteWindowComponent } from './delete-window/delete-window.component';
import { SighInComponent } from './sigh-in/sigh-in.component';
import { AdminComponent } from './admin/admin.component';

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
    DeleteWindowComponent,
    SighInComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

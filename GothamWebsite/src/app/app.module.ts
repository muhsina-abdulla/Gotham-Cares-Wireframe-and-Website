import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MottoComponent } from './motto/motto.component';
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
import { OutletComponent } from './outlet/outlet.component';
import { DistributionPageComponent } from './distribution-page/distribution-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    MottoComponent,
    WelcomeComponent,
    FooterComponent,
    SecondnavComponent,
    OutletVolComponent,
    VolRegisterComponent,
    AddOutletWindowComponent,
    EditDeleteOutletComponent,
    EditformComponent,
    AdminComponent,
    SighnInComponent,
    OutletComponent,
    DistributionPageComponent,
    HomePageComponent,
    NotFoundComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomePageComponent
      },
      {
        path:'distribution/register',
        component: VolRegisterComponent
      },
      {
        path:'distribution',
        component: DistributionPageComponent
      },
      {
        path:'signin/adminpage/newOutlet',
        component: AddOutletWindowComponent
      },
       {
        path:'signin/adminpage/edit-delete-Outlet/editOutlet',
        component: EditformComponent
      },
      {
        path:'signin/adminpage/edit-delete-Outlet',
        component: EditDeleteOutletComponent
      },
      {
        path:'signin/adminpage',
        component: AdminComponent
      },
      {
        path:'signin',
        component: SighnInComponent
      },
      {
        path:'**',
        component: NotFoundComponent
      },
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

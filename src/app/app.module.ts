import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './component/footer/footer.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';
import { MaincontentComponent } from './component/maincontent/maincontent.component';
import {MatTreeModule} from '@angular/material/tree';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HttpComponent } from './component/http/http.component';
import { QuestionComponent } from './component/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    HomepageComponent,
    MaincontentComponent,
    SidebarComponent,
    
    HttpComponent,
         QuestionComponent,
    

    
  ],
  imports: [
    MatTreeModule,
    BrowserModule,
    MatListModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

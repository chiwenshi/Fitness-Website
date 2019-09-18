import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlidesComponent } from './homepage/slides/slides.component';
import { CourseService } from './course.service'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomecardsComponent } from './homepage/homecards/homecards.component';
import { GooglemapComponent } from './homepage/googlemap/googlemap.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { UserService } from './user.service';
import { TrainingComponent } from './training/training.component';
import { DietComponent } from './diet/diet.component';
import { MyplanComponent } from './myplan/myplan.component';
import { MycoursesComponent } from './myplan/mycourses/mycourses.component';
import { MydietComponent } from './myplan/mydiet/mydiet.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog.service';
import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
import { EquipmentComponent } from './equipment/equipment.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
    SlidesComponent,
    HomecardsComponent,
    GooglemapComponent,
    FooterComponent,
    RegisterComponent,
    CourselistComponent,
    CoursedetailsComponent,
    TrainingComponent,
    DietComponent,
    MyplanComponent,
    MycoursesComponent,
    MydietComponent,
    BlogComponent,
    BlogdetailsComponent,
    EquipmentComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfiUgl4bz0bU3NwELAcGQSiN36P2lOVU8'
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CourseService,UserService,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
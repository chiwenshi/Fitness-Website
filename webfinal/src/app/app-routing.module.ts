import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { TrainingComponent } from './training/training.component';
import { DietComponent } from './diet/diet.component';
import { MyplanComponent } from './myplan/myplan.component';
import { MycoursesComponent } from './myplan/mycourses/mycourses.component';
import { MydietComponent } from './myplan/mydiet/mydiet.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes =[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'training',component: TrainingComponent},
  {path:'diet', component: DietComponent},
  {path:'home',component: HomepageComponent},
  {path:'register', component: RegisterComponent},
  {path:'blog', component:BlogComponent},
  {path:'myplan', component: MyplanComponent,
  children:[
    { path: 'mycourses', component: MycoursesComponent },
    { path: 'mydiet', component: MydietComponent }
  ]},
  {path:'result',component:CourselistComponent},
  {path:'equipment', component:EquipmentComponent},
  {path:'blog/:id/details',component:BlogdetailsComponent},
  {path:'category/:name', component: CourselistComponent},
  {path:'course/:id',component: CoursedetailsComponent},
  {path:'course/:name/:id', component: CoursedetailsComponent },
  {path:'home/:username',component: HomepageComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
  
})
export class AppRoutingModule {
  

}

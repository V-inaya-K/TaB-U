import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HttpComponent } from './component/http/http.component';
import { MaincontentComponent } from './component/maincontent/maincontent.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { QuestionComponent } from './component/question/question.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome", component:MaincontentComponent},
  {path:"question", component:QuestionComponent},
  // {path:"hello", component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

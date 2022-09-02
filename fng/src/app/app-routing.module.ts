import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { ErrorComponent } from './error/error.component'
import { SignUpComponent } from './sign_up/sign-up.component'
import { LoginComponent } from './login/login.component'
import { ProfileListComponent} from './profile-list/profile-list.component'
import { TestComponent } from './test/test.component'
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [{path: '', pathMatch:'full', component: HomeComponent}, {path: "about", component: AboutComponent}, {path: "contact", component: ContactComponent}, {path: 'sign_up', component: SignUpComponent}, {path: 'login', component: LoginComponent}, {path: 'profile', component: ProfileListComponent}, {path: 'test', component: TestComponent}, {path: 'create', component: CreateComponent}, {path: 'update', component: UpdateComponent}, {path: '**', component: ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

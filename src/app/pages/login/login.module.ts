import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRotas } from './login.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(LoginRotas)],
})
export class LoginModule {}

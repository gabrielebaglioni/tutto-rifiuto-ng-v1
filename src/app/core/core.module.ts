import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { CommonModule } from '@angular/common';
// import { SetBackGound } from './container/customDirective/Background.directive';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,ContainerComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-eKart';
}

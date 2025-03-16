import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

@Component({
  selector: "#app-header",
  imports: [TopHeaderComponent,MainmenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

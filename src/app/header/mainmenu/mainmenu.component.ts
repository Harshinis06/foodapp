import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mainmenu',
  imports: [NgFor],
  templateUrl: './mainmenu.component.html',
  // styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent {
MainMenu:String[]=['Home','Products','About','Contact']
}

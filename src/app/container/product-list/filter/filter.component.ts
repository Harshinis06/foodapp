import { Component, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number=0;

  @Input()
  InStock:number=0;

  @Input()
  OutOfStock:number=0;

  @Output()
  selectRadioEvent:EventEmitter<string>=new EventEmitter<string>();

  selectedRadioFilterButton:string='all';

  onSelectRadioEvent(){
    console.log(this.selectedRadioFilterButton);
    
    this.selectRadioEvent.emit(this.selectedRadioFilterButton);
  }
}

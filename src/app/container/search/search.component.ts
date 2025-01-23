import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule,NgIf,NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchText:string ='';

// updateSearchText(event:any ){
// this.searchText=event.target.value
// }

@Output()
SearchTextEvent :EventEmitter<string>=new EventEmitter();

@ViewChild('searchInTrack',{static:false}) searchInTrackEle:ElementRef

onChangeSearch(){
  this.SearchTextEvent.emit(this.searchText);
}

// updateSearchText(inputEle:HTMLInputElement){
//   // this.searchText=event.target.value
//   console.log(inputEle.value);
//     this.searchText=inputEle.value
//     this.SearchTextEvent.emit(this.searchText);
//   }
//this is for before using the viewChild decorator

updateSearchText(){
  // this.searchText=event.target.value
  console.log(this.searchInTrackEle);
    this.searchText=this.searchInTrackEle.nativeElement.value
    this.SearchTextEvent.emit(this.searchText);
  }
}

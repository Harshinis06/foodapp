import { Component, Input } from '@angular/core';
import { Product } from '../../Model/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { NgIf,NgFor } from '@angular/common';
import { SetBackGound } from '../customDirective/Background.directive';


@Component({
  selector: 'product-details',
  imports: [NgIf,NgFor,SetBackGound],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

@Input()
productListComponentEle:ProductListComponent=undefined

product:Product ;

//it will show error becz when we use reference 
  
ngOnInit(){
this.product=this.productListComponentEle.searchedItems;
}

closeDetails(){
  this.product=null; 
}
}

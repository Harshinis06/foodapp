import { Component, contentChild, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import {NgFor} from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgIf,NgClass } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';

@Component({
  selector: 'app-container',
  imports: [SearchComponent,NgFor,ProductListComponent,ProductDetailsComponent,NgIf,NgClass,FeatureComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent{
  name :string="John smith";
  product={
    Name: "Iphone",
    Price: 999,
    color:"Coral",
    Discounted_price:8.5,
    Instock:1,
    imageURL:"assets/images/Men-Shoes.png"
  }
  oneArray :any[] =[1,2,3,4,23,98,'erfre',true];
  // Name:string= "Iphone";
  // Price:Number= 999;
  // color:string="Coral";
  // Discounted_price:Number =789;

  getDiscountPrice(){
return this.product.Price-(this.product.Price*this.product.Discounted_price/100)
  }
  
  onNameChange(event:any){
    console.log(event);
    this.name=event.target.value;
  }
  searchedTexts:string ='';

  onSearch(value:string) {
    this.searchedTexts = value; 
  }

  @ViewChild('productListComponent') productListComponentEl:ProductListComponent;

 
}

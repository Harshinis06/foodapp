import { Component, Input } from '@angular/core';
// import { NgFor } from '@angular/common';
// import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
// import { NgStyle } from '@angular/common';
// import { NgClass } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { Product } from '../../Model/product';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'product-list',
  imports: [CommonModule,ProductComponent,FilterComponent,NgTemplateOutlet],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  searchedItems:Product
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["Gray", "Blue", "Black"],
      price: 160,
      discountPrice:140,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Nike React Miler",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["Gray", "Blue", "Black"],
      price: 130,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png"
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 37",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["Gray", "Blue", "Black", "Brown", "Red"],
      price: 120,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png"
    },
    {
      id: 4,
      name: "Nike Joyride Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["Gray", , "Brown", "Red"],
      price: 180,
      discountPrice:140,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png  "
    },
    {
      id: 5,
      name: "Nike Mercurial Vapor 13 Elite FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["Gray", "Blue", "Black"],
      price: 250,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png",
      slug: "nike-mercurial-vapor-13-elite-fg"
    },
    {
      id: 6,
      name: "Nike Phantom Vision Elite Dynamic Fit FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["Gray", "Blue", "Black"],
      price: 150,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png  "
    },
    {
      id: 7,
      name: "Nike Phantom Venom Academy FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["Gray", "Brown", "Red", "Black"],
      price: 80,
      discountPrice:60,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png "
    },
    {
      id: 8,
      name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ["Gray", "Blue", "Black"],
      price: 145,
      discountPrice:125,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png",
      slug: "nike-mercurial-vapor-13-elite-tech-craft-fg"
    },
    {
      id: 9,
      name: "Nike Mercurial Superfly 7 Pro MDS FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["Gray", "Blue", "Black", "Brown", "Red"],
      price: 137,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png",
      slug: "nike-mercurial-superfly-7-pro-mds-fg"
    },
    {
      id: 10,
      name: "Nike Air Force 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "KIDS",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["Gray", "Blue", "Black"],
      price: 90,
      discountPrice:70,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "assets/images/Men-Shoes.png"
    },
    
  ];

  totalstock=this.products.length;
  productInstock=this.products.filter(p=>p.is_in_inventory===true).length;
  productOutOfStock=this.products.filter(p=>p.is_in_inventory===false).length;

selectedRadioFilterButton:string='all';
  
 onFilter(value:any){
  console.log(this.selectedRadioFilterButton=value);
  
  this.selectedRadioFilterButton=value;
 }
 @Input()
 searchText:string ='';


  // discountprice() {
  //   return this.products.price - (this.products.price * this.products.discountPrice / 100);
  // }
  
 
}

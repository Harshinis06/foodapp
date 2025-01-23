import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';
import { Product } from '../../../Model/product';
import { CardHoverDirective } from '../../customDirective/card-hover.directive';
import { HostBindHoverDirective } from '../../customDirective/host-bind-hover.directive';

@Component({
  selector: 'app-product',
  imports: [NgFor,NgIf,NgStyle,NgClass,CardHoverDirective,HostBindHoverDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  products:Product
}

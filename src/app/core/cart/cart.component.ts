import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() data:any;
  constructor(
    private shoppingCartService:ShoppingCartService
  ) { }

  ngOnInit(): void {
  }
  public getLink(link:string):string{
    return `assets/${link}`
  }

  handleAddCart(cart:any){
    this.shoppingCartService.addCart(cart);
  }
}

import { CommonService } from 'src/app/services/common.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() data:any;
  constructor(
    private shoppingCartService:ShoppingCartService,
    private commonService:CommonService,
    private _router:Router,

  ) { }

  ngOnInit(): void {
  }
  public getLink(link:string):string{
    return `assets/${link}`
  }

  handleAddCart(cart:any){
  const {title,description,files}=cart;
    this.shoppingCartService.addCart({title:title,description:description,files:this.getLink(files),count:1});
  }

  navigateToDetail(data:any){
    this.commonService.setCartDetail(data);
    this._router.navigate(['/detail']);

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public dataSet=[
    {
    name:"Sách kinh tế",

    const:18000,
    count:2,
    free:36000,
  },
    {
    name:"Sách kinh tế",

    const:18000,
    count:2,
    free:36000,
  },
    {
    name:"Sách kinh tế",

    const:18000,
    count:2,
    free:36000,
  },
    {
    name:"Sách kinh tế",

    const:18000,
    count:2,
    free:36000,
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public a=0;
    public changeCountBook(event:any,index:any){
      console.log(event.target.value)
      this.dataSet[index].count=event.target.value;
      console.log(this.dataSet[index]);

    }
}

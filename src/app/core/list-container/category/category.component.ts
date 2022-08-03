import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from './../../base/base/base.component';
import { BookService } from './../../../services/book/book.service';
import { publish } from 'rxjs'
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends BaseComponent implements OnInit,OnDestroy {
  public categories:any;
  public publishers:any;
  public selectedPublisherId=1;
  public maxPrice:number=0;
  public minPrice:number=0;
  public bookName='';
  public authorName='';
  constructor(
  private bookService:BookService,
  private commonService:CommonService

  ) {
    super();
   }
  override  preInit(): void {
      this.subscribeUntilDestroy(this.bookService.getCategories(),(categories:any)=>{
        this.categories  =categories.map((category:any)=>{
          return {...category,check:false}
        });
        // console.log(categories);

      })
      this.subscribeUntilDestroy(this.bookService.getPublishers(),(publishers:any)=>{
        this.publishers  =publishers.map((publisher:any)=>{
          return {...publisher,check:false}
        });
        // console.log(publishers);

      })
  }

  public searchAdvance(){
    const selectedCategoriesId=this.categories.filter((category:any)=>category.check===true).map((category:any)=>category.id)
    console.log({bookName:this.bookName,maxPrice:this.maxPrice,minPrice:this.minPrice,selectedPublisherId:this.selectedPublisherId,selectedCategoriesId});
    const data={bookName:this.bookName,authorName:this.authorName,maxPrice:this.maxPrice,minPrice:this.minPrice,selectedPublisherId:this.selectedPublisherId,selectedCategoriesId}
    this.subscribeUntilDestroy(this.bookService.searchAdvance(data),(listCart:any)=>{
      if(!Array.isArray(listCart)){
        this.commonService.setListCart([]);
        this.commonService.notifySuccess(listCart)
      }
      else this.commonService.setListCart(listCart)
    })
  }
}

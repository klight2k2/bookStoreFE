import { BookService } from './../../../services/book/book.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent extends BaseComponent implements OnInit {
  public trendingBook:any;
  constructor( private bookService:BookService) { super()}

  override  preInit(): void {
      this.subscribeUntilDestroy<any>(this.bookService.getTrendingBook(),(trendingBook:any)=>{
            this.trendingBook=trendingBook;

      })
  }

}

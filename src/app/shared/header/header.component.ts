import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from './../../services/auth/auth.service';
import { BookService } from './../../services/book/book.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public isLogined$=this.commonService.logined$;
  public user:any;
  public bookTitle='';
  public countCart=0;
  public countCart$=new BehaviorSubject(0);
  public navigateList={
    home:true,
    category:false
  };
  constructor(
    private _router:Router,
    private shoppingCartService:ShoppingCartService,
    private commonService:CommonService,
    private auth:AuthService,
    private bookService:BookService
  ) { super()}
  public categories:any;

  override preInit(){
    this.subscribeUntilDestroy(this.bookService.getCategories(),(categories:any)=>{
      this.categories  =categories.map((category:any)=>{
        return {...category,check:false}
      });
      console.log(categories);

    })
    this.subscribeUntilDestroy(this.commonService.user$,(data:any)=>{
      this.user=data;
    })
  }
  override postInit(){
    this.shoppingCartService.getCountCart()
    this.subscribeUntilDestroy<any>(this.shoppingCartService.shoppingCartData,(data:any)=>{
      this.countCart=data?.length || 0;
      this.countCart$.next(this.countCart)
      console.log('conut',data?.length);

    })

  }

  navigateToList(){
    this._router.navigate(['/list']);

  }

  navigateShoppingCart(){
    this._router.navigate(['/shopping-cart']);
  }

  navigateToHome(){
    this._router.navigate(['/home']);

  }
  navigate(navigateAdress:string,isLoginPage=false,isRegister=false){
    console.log(this._router.url);
    if(navigateAdress=='/home') {
      this.navigateList.home=true;
      this.navigateList.category=false;
    }
    if(navigateAdress=='/list'){
      this.navigateList.home=false;
      this.navigateList.category=true;
    }


    if(isLoginPage) {
      this.commonService.setLoginPage(false);
    }
    if(isRegister){
      this._router.navigate(['/'+navigateAdress],{queryParams:{isRegister:true}});

    }else{

      this._router.navigate(['/'+navigateAdress]);
    }
  }
  logOut(){
    this.commonService.setLoading(true)
  this.auth.signOut();
    this.navigate('home');
    this.commonService.setLoading(false)
  }

  searchByTitle(){
    this.subscribeUntilDestroy(this.bookService.searchByTitle({bookTitle:this.bookTitle}),(listCart:any)=>{
      this.commonService.setListCart(listCart)
      this.navigate('list')
    })
  }

  getAll(){
    this.subscribeOnce(this.bookService.getAll(), (listCart:any)=>{
      this.navigate('list')
      this.commonService.setListCart(listCart)
      console.log("click");

    })
  }
  searchByCategory(categoryId:number){
    this.subscribeOnce(this.bookService.searchByCategory(categoryId),(data:any)=>{
      this.commonService.setListCart(data);
      this.navigate('list')
    })
  }
  }




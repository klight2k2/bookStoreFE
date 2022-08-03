import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { differenceInCalendarDays } from 'date-fns';
import { AdminService } from './../../../../services/admin/admin.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router'
import { BookService } from './../../../../services/book/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent extends BaseComponent implements OnInit {
  public categories:any;
  public publishers:any;
  public authors:any;
  imageData: string = '';

  public selectedAuthor=1;
  today = new Date();
  public data:any;
  public bookForm!:FormGroup;
  constructor(private fb: FormBuilder,
              private adminService:AdminService,
              private commonService:CommonService,
              private _router:Router,
              private bookService:BookService
    ) {
  super()

    }

    navigate(address:string){
      this._router.navigate([address]);
    }
  override preInit(){
    this.subscribeUntilDestroy(this.bookService.getCategories(),(categories:any)=>{
      this.categories  =categories.map((category:any)=>{
        return {...category,check:false}
      });

    })
    this.subscribeUntilDestroy(this.bookService.getPublishers(),(publishers:any)=>{
      this.publishers  =publishers.map((publisher:any)=>{
        return {...publisher,check:false}
      });
      // console.log(publishers);

    })
    this.subscribeUntilDestroy(this.adminService.getAuthors(),(authors:any)=>{
      this.authors  =authors.map((author:any)=>{
        return {...author,check:false}
      });

    })
    this.subscribeUntilDestroy(this.adminService.userDetail$,(data:any)=>{

      this.bookForm=this.fb.group({
        title:new FormControl('',[Validators.required,Validators.email]),
        description:new FormControl('',[Validators.required]),
        publisher:new FormControl(1),
        price:new FormControl(0,[Validators.required]),
        pages:new FormControl(0,[Validators.required]),
        quantity:new FormControl(0,[Validators.required]),
        image:new FormControl('',[Validators.required]),
      })
    })

  }
  onFileSelect(event: Event): void {
    // @ts-ignore: Object is possibly 'null'.
    const file = (event.target as HTMLInputElement)?.files[0];
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    this.bookForm.patchValue({ image: file });
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  disabledDate = (current: Date): boolean =>
  // Can not select days before today and today
  differenceInCalendarDays(current, this.today) > 0;


  saveUser(){
    const selectedCategoriesId=this.categories.filter((category:any)=>category.check===true).map((category:any)=>category.id)
    this.subscribeOnce( this.adminService.addBook(this.bookForm.value,this.selectedAuthor, selectedCategoriesId ),(res:any)=>{
      this.commonService.notifySuccess(res)
      if(res.code=200) this.navigate('/admin')
    })

  }
}

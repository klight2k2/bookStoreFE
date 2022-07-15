import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable,Subject,take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-base',
  template: `
    <p>
      base works!
    </p>
  `,
  styles: [
  ]
})
export  class BaseComponent implements OnInit,OnDestroy {
  private $destroy=new Subject<string>();
  constructor() { }

  ngOnInit(): void {
    this.preInit();
    this.init();
    this.postInit();
  }

  ngOnDestroy(): void {
    this.preDestroy();
    this.destroy();
    this.postDestroy();
  }

  public preInit():void{}

  public init():void{}

  public postInit():void{}

  protected preDestroy():void{
    this.$destroy.next('');
  }

  protected destroy():void{}

  protected postDestroy():void{}

  protected subcribeOnce<T>(observable:Observable<T>,callback:Function):void{
    observable.pipe(take(1)).subscribe((data:any)=>callback(data));
  }

  protected subscribeUntilDestroy<T>(observable:Observable<T>,callback:Function):void{

    observable.pipe(takeUntil(this.$destroy)).subscribe((data:any)=>{

      callback(data)
    });

  }
}

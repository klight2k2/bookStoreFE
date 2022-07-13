import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable,take, takeUntil } from 'rxjs';

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
export class BaseComponent implements OnInit,OnDestroy {
  private $destroy=new BehaviorSubject('');
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

  protected preInit():void{}

  protected init():void{}

  protected postInit():void{}

  protected preDestroy():void{
    this.$destroy.next('destroy');
  }

  protected destroy():void{}

  protected postDestroy():void{}

  protected subcribeOnce<T>(observable:Observable<T>,callback:void):void{
    observable.pipe(take(1)).subscribe(()=>callback);
  }

  protected subscribeUntilDestroy<T>(observable:Observable<T>,callback:void):void{
    observable.pipe(takeUntil(this.$destroy)).subscribe(()=>callback);

  }
}

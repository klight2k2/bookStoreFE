import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public dataSet=[
    {
      url:"assets/slide/1.webp"
    },
    {
      url:"assets/slide/2.webp"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

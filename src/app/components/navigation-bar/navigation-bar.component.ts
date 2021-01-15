import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationBarComponent implements OnInit {

  constructor() { }
  showFiller = false;
  ngOnInit(): void {
  }

}

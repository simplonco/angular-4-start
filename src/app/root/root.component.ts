import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})

export class RootComponent {
  user = 'Paul';
  numbers = [2,3,4,5];
}
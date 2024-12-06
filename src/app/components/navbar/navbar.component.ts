import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('300ms 0s', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate('300ms 0s', style({ opacity: 0 }))
        ])
      ])
    ]
})
export class NavbarComponent {
  public isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  public toggleDropdown() {
    this.isVisible = !this.isVisible;
  }
}

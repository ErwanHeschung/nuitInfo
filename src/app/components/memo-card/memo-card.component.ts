import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-memo-card',
  imports: [CommonModule],
  templateUrl: './memo-card.component.html',
  styleUrl: './memo-card.component.scss'
})
export class MemoCardComponent {
  @Input() public title: string="Memory Card";
  @Input() public description: string="this is a memory card";
  @Input() public image: string = "/cards/card1.jpg";
  @Input() public flip: boolean = false;
  @Input() public descriptionImg: string = "";

}

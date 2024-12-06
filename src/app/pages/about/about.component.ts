import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule,NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public topics = [
    {
      title: 'Composition en eau',
      description: 'Le corps humain et l’océan sont principalement composés d’eau.',
      details: 'Le corps humain est constitué d’environ 60% d’eau, tandis que l’océan couvre plus de 70% de la surface terrestre et est essentiel à la vie.',
      showDetails: false
    },
    {
      title: 'Production d’oxygène',
      description: 'L’océan est le principal producteur d’oxygène, comme les poumons pour le corps humain.',
      details: 'Le phytoplancton produit plus de 50% de l’oxygène mondial, tout comme les poumons alimentent nos cellules en oxygène.',
      showDetails: false
    },
    {
      title: 'Systèmes circulatoires',
      description: 'Les courants océaniques et la circulation sanguine ont des fonctions similaires.',
      details: 'Les courants océaniques régulent la température de la planète et distribuent les nutriments, de la même manière que le cœur pompe le sang pour nourrir le corps.',
      showDetails: false
    }
  ];

  toggleDetails(topic: any): void {
    topic.showDetails = !topic.showDetails;
  }
}
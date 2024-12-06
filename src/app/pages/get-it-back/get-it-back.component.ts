import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-it-back',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './get-it-back.component.html',
  styleUrl: './get-it-back.component.scss'
})
export class GetItBackComponent {
  public positionX: number =  window.innerWidth / 2 - 25;
  public positionY: number = window.innerHeight / 2 - 25;
  public scale: number = 1;
  public score: number = 0;
  public waste: string = "";
  public wastePositionX: number = 0;
  public wastePositionY: number = 0;
  public isWasteDisplayed: boolean = false;
  public randomInfo: any = {};
  public displayPopup: boolean = false;
  
  public info = [
    { id: 1, titre: "Microplastiques dans l'alimentation", description: "Les microplastiques présents dans les fruits de mer peuvent pénétrer dans le corps humain, affectant la santé digestive et hormonale." },
    { id: 2, titre: "Mercure et neurotoxines", description: "Le mercure provenant de la pollution marine s'accumule dans les poissons, et sa consommation peut provoquer des troubles neurologiques." },
    { id: 3, titre: "Hydrocarbures et cancer", description: "Les hydrocarbures issus des marées noires peuvent contaminer les sources d'eau potable, augmentant ainsi le risque de cancer chez les humains." },
    { id: 4, titre: "Bactéries et infections", description: "Les eaux polluées par les eaux usées peuvent entraîner des infections gastro-intestinales et autres maladies chez l'homme." },
    { id: 5, titre: "Pollution chimique et troubles hormonaux", description: "Les produits chimiques toxiques présents dans l'eau marine peuvent perturber le système hormonal humain, entraînant des effets négatifs sur la reproduction et la croissance." },
    { id: 6, titre: "Destruction des récifs coralliens et malnutrition", description: "La pollution détruit les récifs coralliens, réduisant les stocks de poissons et menaçant la sécurité alimentaire des populations humaines." },
    { id: 7, titre: "Résistance aux antibiotiques", description: "Les polluants marins favorisent la résistance aux antibiotiques, rendant les infections humaines plus difficiles à traiter." },
    { id: 8, titre: "Inhalation de toxines", description: "Les toxines marines présentes dans l'air peuvent être inhalées, augmentant les risques de maladies respiratoires et de cancers pulmonaires." },
    { id: 9, titre: "Risque d'infections cutanées", description: "La pollution des plages expose la peau humaine à des agents pathogènes, augmentant le risque d'infections cutanées." },
    { id: 10, titre: "Bioaccumulation de polluants", description: "Les polluants marins se bioaccumulent dans les poissons, ce qui peut entraîner des risques pour la santé humaine lorsqu'ils sont consommés." }
  ];

  private step: number = 15;
  private collisionThreshold: number = 100;

  constructor() {
    this.spawnWaste();
  }

  @HostListener('window:keydown', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    event.preventDefault();

    switch (event.key) {
      case 'z':
        this.positionY = Math.max(this.positionY - this.step, 0);
        break;
      case 's':
        this.positionY = Math.min(this.positionY + this.step, window.innerHeight - 50);
        break;
      case 'q':
        this.positionX = Math.max(this.positionX - this.step, 0);
        this.scale = 1;
        break;
      case 'd':
        this.positionX = Math.min(this.positionX + this.step, window.innerWidth - 50);
        this.scale = -1;
        break;

      case 'ArrowUp':
        this.positionY = Math.max(this.positionY - this.step, 0);
        break;
      case 'ArrowDown':
        this.positionY = Math.min(this.positionY + this.step, window.innerHeight - 50);
        break;
      case 'ArrowLeft':
        this.positionX = Math.max(this.positionX - this.step, 0);
        this.scale = 1;
        break;
      case 'ArrowRight':
        this.positionX = Math.min(this.positionX + this.step, window.innerWidth - 50);
        this.scale = -1;
        break;
    }

    this.checkCollision();
  }

  private spawnWaste(): void {
    setInterval(() => {
      this.waste = `/waste${Math.ceil(Math.random() * 3)}.png`;
      this.wastePositionX = Math.random() * (window.innerWidth - 50);
      this.wastePositionY = Math.random() * (window.innerHeight - 50);
      this.isWasteDisplayed = true;
      console.log(this.wastePositionX, this.wastePositionY);
    }, 5000); 
  }

  private checkCollision(): void {
    if (
      this.isWasteDisplayed &&
      Math.abs(this.positionX + 40- this.wastePositionX) < this.collisionThreshold &&
      Math.abs(this.positionY + 100- this.wastePositionY) < this.collisionThreshold
    ) {

      this.isWasteDisplayed = false;
      this.displayPopup = true;
      this.score += 1;
      const randomIndex = Math.floor(Math.random() * this.info.length);
      this.randomInfo = this.info[randomIndex];

      setTimeout(() => {
        this.displayPopup = false;
        if (this.score === 10) {
          setTimeout(() => {
            this.score = 0;
          }, 5000);
        }
      }, 3000);




      
    }
  }
}

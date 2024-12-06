import { Component } from '@angular/core';
import { MemoCardComponent } from '../../components/memo-card/memo-card.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memo-sea',
  imports: [MemoCardComponent, NavbarComponent, CommonModule],
  templateUrl: './memo-sea.component.html',
  styleUrls: ['./memo-sea.component.scss']
})
export class MemoSeaComponent {
  public cards = [
    { id: 1, subject: 'Cœur', content: 'Le cœur pompe le sang, tout comme les courants océaniques déplacent l\'eau à travers le globe.', flipped: false, matched: false, descriptionImg: "/heart.png" },
    { id: 2, subject: 'Cœur', content: 'Le cœur pompe le sang, tout comme les courants océaniques déplacent l\'eau à travers le globe.', flipped: false, matched: false, descriptionImg: "/heart.png" },
    { id: 3, subject: 'Poumons', content: 'Les poumons permettent à l\'oxygène de pénétrer dans le sang, de manière similaire aux océans qui produisent de l\'oxygène grâce au phytoplancton.', flipped: false, matched: false, descriptionImg: "/lungs.png" },
    { id: 4, subject: 'Poumons', content: 'Les poumons permettent à l\'oxygène de pénétrer dans le sang, de manière similaire aux océans qui produisent de l\'oxygène grâce au phytoplancton.', flipped: false, matched: false, descriptionImg: "/lungs.png" },
    { id: 5, subject: 'Cerveau', content: 'Le cerveau coordonne les fonctions corporelles, comme l\'océan profond régule le climat de la Terre.', flipped: false, matched: false, descriptionImg: "/brain.png" },
    { id: 6, subject: 'Cerveau', content: 'Le cerveau coordonne les fonctions corporelles, comme l\'océan profond régule le climat de la Terre.', flipped: false, matched: false, descriptionImg: "/brain.png" },
    { id: 7, subject: 'Peau', content: 'La peau protège le corps, tout comme la surface de l\'océan protège la vie sous-marine en absorbant la lumière du soleil.', flipped: false, matched: false, descriptionImg: "/skin.png" },
    { id: 8, subject: 'Peau', content: 'La peau protège le corps, tout comme la surface de l\'océan protège la vie sous-marine en absorbant la lumière du soleil.', flipped: false, matched: false, descriptionImg: "/skin.png" },
  ];

  private flippedCards: any[] = [];
  private lockBoard: boolean = false;
  public gameOver: boolean = false;

  constructor() {
    this.shuffleCards();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }


  flipCard(card: any) {
    if (this.lockBoard || card.flipped || card.matched || this.flippedCards.length === 2) return;
    console.log(card);
    card.flipped = true;
    this.flippedCards.push(card);
    if (this.flippedCards.length === 2) {
      this.lockBoard = true;
      this.checkForMatch();
    }
  }

  checkForMatch() {
    const [firstCard, secondCard] = this.flippedCards;
    if (firstCard.subject === secondCard.subject) {
      firstCard.matched = true;
      secondCard.matched = true;
      this.resetBoard();
    } else {
      setTimeout(() => {
        firstCard.flipped = false;
        secondCard.flipped = false;
        this.resetBoard();
      }, 1000);
    }
  }


  resetBoard() {
    this.flippedCards = [];
    this.lockBoard = false;

    console.log(this.cards.every((card: any) => card.matched));

    if (this.cards.every((card: any) => card.matched)) {
      this.gameOver = true;
    }
  }

  restartGame() {
    console.log('restart game');
    this.cards.forEach((card: any) => {
      card.flipped = false;
      card.matched = false;
    });

    this.shuffleCards();
    this.gameOver = false;
  }

}

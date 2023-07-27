import { Component, OnInit } from '@angular/core';
import { ScryfallService } from '../scryfall.service';

@Component({
  selector: 'app-card-expositor',
  templateUrl: './card-expositor.component.html',
  styleUrls: ['./card-expositor.component.scss']
})
export class CardExpositorComponent implements OnInit {
  cards: any[] = [];

  constructor(private scryfallService: ScryfallService) { }

  ngOnInit(): void {
    this.scryfallService.getCards().subscribe(response => {
      this.cards = response.data;
    });
  }
}

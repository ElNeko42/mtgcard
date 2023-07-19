import { Component, OnInit } from '@angular/core';
import { ScryfallService } from './scryfall.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mtgcard';
  cards: any[] = [];

  constructor(private scryfallService: ScryfallService) { }

  ngOnInit() {
    this.scryfallService.getCards().subscribe(data => {
      this.cards = data.data.slice(0, 5);
    });
  }
}

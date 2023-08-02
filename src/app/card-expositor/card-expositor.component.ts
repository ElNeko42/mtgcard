import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScryfallService } from '../scryfall.service';

@Component({
  selector: 'app-card-expositor',
  templateUrl: './card-expositor.component.html',
  styleUrls: ['./card-expositor.component.scss']
})
export class CardExpositorComponent implements OnInit {
  cards: any[] = [];
  query: string = '';

  constructor(
    private route: ActivatedRoute,
    private scryfallService: ScryfallService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query'];
      if (this.query) {
        this.scryfallService.searchCards(this.query).subscribe(response => {
          this.cards = response.data;
        });
      } else {
        this.loadRandomCards();
      }
    });
  }

  loadRandomCards(): void {
    for (let i = 0; i < 9; i++) {
      this.scryfallService.getRandomCard().subscribe(response => {
        this.cards.push(response);
      });
    }
  }
}

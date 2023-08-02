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
      this.scryfallService.searchCards(this.query).subscribe(response => {
        this.cards = response.data;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ScryfallService } from '../scryfall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  query: string = ''; // Initialize query

  constructor(private scryfallService: ScryfallService, private router: Router) { }

  ngOnInit(): void {
  }

  search(): void {
    this.scryfallService.searchCards(this.query).subscribe(response => {
      this.router.navigate(['/cards', response.data[0].id]);
    });
  }
}

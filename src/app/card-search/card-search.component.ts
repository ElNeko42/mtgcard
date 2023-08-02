import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScryfallService } from '../scryfall.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  query: string = '';

  constructor(
    private router: Router,
    private scryfallService: ScryfallService
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    this.router.navigate(['/search', this.query]);
  }
}

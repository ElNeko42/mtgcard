import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScryfallService } from '../scryfall.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  card: any;

  constructor(
    private route: ActivatedRoute,
    private scryfallService: ScryfallService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.scryfallService.getCard(id).subscribe(card => {
        this.card = card;
      });
    } else {
      // Manejar el caso en el que id es null, por ejemplo redirigir a una página de error
    }
  }
}

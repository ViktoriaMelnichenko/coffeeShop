import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = 'title';
  @Input({ required: true }) imgSrc: string = 'imgSrc';
  @Input() url: string = '';


  constructor (private router: Router) {

  }

  public navigate(navigate: string): void {
    this.router.navigateByUrl('/' + navigate)
  }

}

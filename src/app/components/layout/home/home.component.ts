import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { MenuList } from '../../../interfaces/data.interface';
import { JsonPipe } from '@angular/common';
import { AuthorizationService } from '../../../services/authorization.Services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public menuList : MenuList[] = []

  constructor (private authServices: AuthorizationService,
               private router: Router
  ) {
    this.menuList = this.authServices.menuList;
  }

  ngOnInit(): void {
    
    this.authServices.pageNavigation.next(this.router.url)
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsList } from '../../../interfaces/data.interface';
import { DetailsCardComponent } from "../details-card/details-card.component";
import { InfoCardComponent } from '../info-card/info-card.component';
import { AuthorizationService } from '../../../services/authorization.Services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsCardComponent, InfoCardComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit, OnDestroy{
  public products: ProductsList[] = [];
  private navigationTitle: string = '';

  constructor(public authServices: AuthorizationService,
              private router: Router
  ) {

  }


  ngOnInit(): void {
    this.authServices.pageNavigation.subscribe(url => {
      this.authServices.menuList.forEach(el => {
        if (url.substring(1, url.indexOf('/' , 1)) === el.url){
            this.products =  el.category;
        }  
      })
      this.authServices.navigateId = +url.substring(url.lastIndexOf('/') + 1) - 1;
    })

    this.authServices.navigateId = +this.router.url.substring(this.router.url.lastIndexOf('/') + 1) - 1;
    this.navigationTitle = this.authServices.navigationTitle;
  }

  ngOnDestroy(): void {   
    this.authServices.navigationTitle = this.navigationTitle.includes('/') ? 
                                        this.navigationTitle.substring(0, this.navigationTitle.indexOf('/')) : this.navigationTitle;                                        
  }
}

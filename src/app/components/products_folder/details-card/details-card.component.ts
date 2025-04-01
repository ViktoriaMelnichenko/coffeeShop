import { Component, Input } from '@angular/core';
import { ProductsList } from '../../../interfaces/data.interface';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { AuthorizationService } from '../../../services/authorization.Services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [ButtonModule, CarouselModule, TagModule],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.scss'
})
export class DetailsCardComponent {
  @Input() products: ProductsList[] = [];

  responsiveOptions: any[] | undefined;

  constructor( private authServices: AuthorizationService,
               private router: Router
  ){

  }

  ngOnInit() {
    this.responsiveOptions = [
        {
            breakpoint: '5000px',
            numVisible: 7,
            numScroll: 1
        },
        {
            breakpoint: '2057px',
            numVisible: 6,
            numScroll: 1
        },
        {
            breakpoint: '1770px',
            numVisible: 5,
            numScroll: 1
        },
        {
            breakpoint: '1490px',
            numVisible: 4,
            numScroll: 1
        },
        {
          breakpoint: '1208px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '926px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '546px',
          numVisible: 1,
          numScroll: 1
        }
    ];
}

navigaeUrl(id: number): void {  
  this.router.navigateByUrl( this.router.url.substring(0, this.router.url.lastIndexOf('/')) + '/' + id);
  this.authServices.navigateId = id - 1;
  
  this.authServices.menuList.forEach(el => {
    if (this.router.url.substring(1, this.router.url.indexOf('/' , 1)) === el.url ){
      el.category.forEach(val => {
        if(val.product_id == id) {          
          this.authServices.navigationTitle = this.authServices.navigationTitle
                                              .substring(0, this.authServices.navigationTitle.indexOf('/')) + ' / ' + val.product_title;
        }
      })
    }  
  })
}
  
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../../services/authorization.Services';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product_img: string | undefined = 'product_img';
  @Input() product_title: string | undefined= 'product_title';
  @Input() product_price: number | undefined = 0;
  @Input() product_id: number | undefined = 0;

  constructor (private router: Router,
               private authServices: AuthorizationService,
  ) {

  }

  public navigation(id: number): void {
 
    this.router.navigateByUrl( this.router.url + '/details/' + id)
    this.authServices.pageNavigation.next(this.router.url + '/details/' + id)
    this.authServices.navigateId = id - 1;

    this.authServices.menuList.forEach(el => {
      if (this.router.url.substring(1, this.router.url.indexOf('/' , 1)) === el.url ){
        el.category.forEach(val => {
          if(val.product_id == id) {
            this.authServices.navigationTitle += val.product_title;
          }
        })
      }  
    })

  }
  
}

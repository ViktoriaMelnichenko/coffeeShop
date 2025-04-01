import { AfterContentInit, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductsList } from '../../../interfaces/data.interface';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthorizationService } from '../../../services/authorization.Services';
import { Location, NgStyle, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, RouterOutlet, TitleCasePipe, RouterLink, NgStyle],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, AfterContentInit, OnDestroy {
  
  public products_list: ProductsList[] = [];
  public navigationUrl: boolean = true;
  public navigateTitle: string = '';
  
  constructor(private router: Router, 
              public authServices: AuthorizationService,
              private ref: ChangeDetectorRef,
              private location: Location
  ) {
    
  }
  

  @HostListener('window:popstate', ['$event.target.location.pathname'])
  onPopState(event: string) {
    this.authServices.menuList.forEach(el => {
      if (event.substring(1, event.indexOf('/' , 1)) === el.url){     
        this.navigateTitle = el.url || '';
      }  
    })
   
    if(!event.includes('details')){
      this.navigationUrl = true;
      this.ref.detectChanges();
    } else {
      this.authServices.navigateId = +event.substring(event.lastIndexOf('/') + 1);
      this.authServices.pageNavigation.next(event)
      this.ref.detectChanges();
      
    }
    
    
  }

  ngOnInit(): void {
    this.authServices.pageNavigation.next(this.router.url)
    
    this.authServices.menuList.forEach(el => {   
      if (this.router.url.substring(1, this.router.url.indexOf('/' , 1)) === el.url  || this.router.url.substring(1) === el.url){
      this.navigateTitle = el.url || '';
      this.products_list =  el.category;
      }
      
    })
  }

  ngAfterContentInit(): void {    
    this.authServices.pageNavigation.subscribe(param => {
      console.log(8888888888888);
      if(param.includes('details')) {
        this.navigationUrl = false;
        this.ref.detectChanges();
        this.authServices.menuList.forEach(el => {
          if (param.substring(1, param.indexOf('/' , 1)) === el.url){
              el.category.some(val => {
              if(param.substring(param.lastIndexOf('/') + 1) == String(val.product_id)) {                               
                this.authServices.navigationTitle = ' / ' + val.product_title;
                return true;
              }
              return false;
            })
    
          }  
      })
    }
    })    
  }

  backNavigation(event: Event): void {
    this.location.back();
  }

  navigate(str: string): void {
    if(!this.navigationUrl) {
      this.navigationUrl = true;
      this.router.navigateByUrl(str);
      this.ref.detectChanges();
    }
    
  }

  ngOnDestroy(): void {    
    this.authServices.navigationTitle = '';
  }
}

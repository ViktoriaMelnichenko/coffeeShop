import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {

  @Input() productInfo_img: string | undefined = 'product_img';
  @Input() productInfo_title: string | undefined= 'product_title';
  @Input() productInfo_price: number | undefined = 0;
  @Input() productInfo_discription: string | undefined = 'discription';
  
  public desktopSize: boolean = true;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(event: number) {
    if(400 < event && event < 501) {     
      this.desktopSize = false;
    } else {
      this.desktopSize = true;
    }
  }

  ngOnInit(): void {
    if(400 < window.innerWidth && window.innerWidth < 501) {
      this.desktopSize = false;
    }
  }

}

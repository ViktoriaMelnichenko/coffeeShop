import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  public desktopSize: boolean = true;

  constructor(private router: Router){
    
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(event: number) {
    if(event < 800) {     
      this.desktopSize = false;
    } else {
      this.desktopSize = true;
    }
  }

  ngOnInit(): void {
    if( window.innerWidth < 800) {
      this.desktopSize = false;
    }
  }

  navigate(): void {
    this.router.navigateByUrl('/');
  }

}

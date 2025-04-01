import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BodyComponent } from "./components/body/body.component";
import { AuthorizationService } from './services/authorization.Services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'coffeeShop';
  public activatedUrl: boolean = false;
  
  constructor(public activeUrl: AuthorizationService
  ) {
      
  }

  ngOnInit(): void {      
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsButtonComponent } from './news-button/news-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NewsButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-web-component';
}

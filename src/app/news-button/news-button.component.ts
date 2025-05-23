import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-button',
  standalone: true,
  templateUrl: './news-button.component.html',
  styleUrls: ['./news-button.component.css'],
})
export class NewsButtonComponent {
  constructor(private router: Router) {}

  navigateToNews() {
    this.router.navigate(['/news']);
  }

  navigateToInputBox() {
    this.router.navigate(['/input']);
  }
}

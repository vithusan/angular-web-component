import { Component, OnInit, inject, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsStore } from '../store/news.store';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit, OnDestroy {
  @Input() inputValue: string = '';
  readonly store = inject(NewsStore);
  private readonly destroy$ = new Subject<void>();


  ngOnInit(): void {
    this.store.loadArticles();

    window.addEventListener('input-value', (event: any) => {
      this.inputValue = event.detail;
    });

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


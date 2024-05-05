import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent implements OnChanges {

  @Input() lastProduct: number = 0;

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['lastProduct'] && this.lastProduct !== undefined) {

      console.log('Último producto cargado:', this.lastProduct);
    }

    console.log(this.lastProduct);
  }
}

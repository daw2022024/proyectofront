import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiJsonService } from '../api-json.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  products: any;
  constructor(private activatedRoute: ActivatedRoute, private apiJsonService: ApiJsonService, private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.apiJsonService.catalog().subscribe(result => {
        this.products = result;
      });
    });
  }

  goToProduct(id: number) {
    this.router.navigateByUrl("product/"+ id);
  }
}

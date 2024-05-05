import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, RouterLink } from '@angular/router';
import { ApiJsonService } from '../api-json.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  elements: any;
  id: string = '1';
  constructor(private activatedRoute: ActivatedRoute, private apiJsonService: ApiJsonService, private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get('id') || '1';
        this.apiJsonService.product(parseInt(this.id)).subscribe(result => {
          this.elements = result;
        });
      
    });

  }

}

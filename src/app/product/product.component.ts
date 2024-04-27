import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiJsonService } from '../api-json.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
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
          console.log(this.id)
        });
      
    });

  }
  goToProduct(id: number) {
    this.router.navigateByUrl("product/"+ id);
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterOutlet } from '@angular/router';
import { ApiJsonService } from '../api-json.service';

enum Endpoint {
  Home = 'home',
  Catalog = 'catalog',
  Category = 'category',
  Subcategory = 'subcategory',
  Product = 'product'
}

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  elements: any;
  id: string = '1';
  constructor(private activatedRoute: ActivatedRoute, private apiJsonService: ApiJsonService, private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get('id') || '1';
        this.apiJsonService.subcategory(parseInt(this.id)).subscribe(result => {
          this.elements = result;
          console.log(this.id)
        });
      
    });

  }
  goToProduct(id: number) {
    this.router.navigateByUrl("product/"+ id);
  }

}

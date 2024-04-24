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
  id: any;
  tipo: string = '';
  elementos: any;

  constructor(private activatedRoute: ActivatedRoute, private apiJsonService: ApiJsonService, private router: Router) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.tipo = this.activatedRoute.snapshot.url[0].path;
      if (this.activatedRoute.snapshot.url[1].path != null) {
        this.id = parseInt(this.activatedRoute.snapshot.url[1].path);
      }
      switch (this.tipo) {
        case Endpoint.Home:
          this.apiJsonService.home().subscribe(result => this.elementos);
          console.log(this.tipo)
          break;
        case Endpoint.Catalog:
          this.apiJsonService.catalog().subscribe(result => this.elementos);
          console.log(this.tipo)
          break;
        case Endpoint.Category:
          if(this.id!=null){
            this.apiJsonService.category(this.id).subscribe(result=>this.elementos);
            console.log(this.tipo)
          }else{
          this.apiJsonService.category().subscribe(result => this.elementos);
          console.log(this.tipo)
          }
          break;
        case Endpoint.Subcategory:
          this.apiJsonService.subcategory(this.id).subscribe(result => this.elementos);
          console.log(this.tipo)
          break;
        case Endpoint.Product:
          this.apiJsonService.product(this.id).subscribe(result => this.elementos);
          console.log(this.tipo)
          break;

      }


    })
  }

}

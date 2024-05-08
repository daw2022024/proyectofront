import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiJsonService } from '../api-json.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  elements: any;
  id: string = '';
  mensaje:string='';
  constructor(private activatedRoute: ActivatedRoute, private apiJsonService: ApiJsonService, private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get('id') || '';
      if (this.id == '') {
        this.apiJsonService.category().subscribe(result => {
          this.elements = result;
          
        });
      }
      else {
        this.apiJsonService.category(parseInt(this.id)).subscribe(result => {
          this.elements = result;
          console.log(this.id)
          if(this.elements[0].mensaje=='No se han encontrado resultados')
            {
              this.mensaje='No se han encontrado resultados';
            }
        });
      }
    });

  }
  goToProduct(id: number) {
    this.router.navigateByUrl("product/"+ id);
  }
}

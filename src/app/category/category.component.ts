import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiJsonService } from '../api-json.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  elements: any;
  id: string = '';
  constructor(private activatedRoute: ActivatedRoute, private apiJsonService: ApiJsonService, private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get('id') || '';
      if (this.id == '') {
        this.apiJsonService.category().subscribe(result => {
          this.elements = result;
          console.log(this.id)
        });
      }
      else {
        this.apiJsonService.category(parseInt(this.id)).subscribe(result => {
          this.elements = result;
          console.log(this.id)
        });
      }
    });

  }
  goToProduct(id: number) {
    this.router.navigateByUrl("product/"+ id);
  }
}

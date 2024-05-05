import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterOutlet } from '@angular/router';
import { ApiJsonService } from '../api-json.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  elements: any;
  id: string = '1';
  subcategory:any;
  constructor(private activatedRoute: ActivatedRoute, private apiJsonService: ApiJsonService, private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get('id') || '1';
        this.apiJsonService.subcategory(parseInt(this.id)).subscribe(result => {
          this.elements = result;
          this.subcategory =this.elements[1].subcategory;
        });
      
    });

  }
  goToProduct(id: number) {
    this.router.navigateByUrl("product/"+ id);
  }

}

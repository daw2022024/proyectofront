import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiJsonService } from '../api-json.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  elements: any;
  constructor(private activatedRoute: ActivatedRoute, private apiJsonService: ApiJsonService, private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.apiJsonService.home().subscribe(result => {
        this.elements = result;
      });
    });
  }

  goToProduct(id: number) {
    this.router.navigateByUrl("product/"+ id);
  }
}

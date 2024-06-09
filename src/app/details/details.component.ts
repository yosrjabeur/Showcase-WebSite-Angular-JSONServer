import { Component } from '@angular/core';
import { product } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud/crud.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] 
})
export class DetailsComponent {
  product: product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: CrudService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productService.getProductById(productId)
      .subscribe(data => {
        this.product = data;
      });
  }

  showDetails(productId: number): void {
    this.router.navigate(['/details', productId]);
  }
}


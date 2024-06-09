import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { product } from '../model/product';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] 
})
export class ProductsComponent implements OnInit {
  products: product[] = [];  
  product: product | undefined;
  searchTerm: string = '';
  currentPage:number=1;
  pageSize:number=5;
  totalPages:number=0;

  totalProducts: number = 0;
  checkedProducts: number = 0;
  loading: boolean = false; 


  constructor(
    private productService: CrudService,
    private route: ActivatedRoute,
    private router: Router 
) { }

  ngOnInit(): void {
    this.fetchProducts();
    this.loading = true;
    const productId = this.route.snapshot.params['id'];
    this.productService.getProductById(productId)
      .subscribe(data => {
        this.product = data;
      });
  }
  fetchProducts() {
    this.productService.getProducts(this.searchTerm,this.currentPage,this.pageSize)
    .subscribe(data => {
      this.products = data.body as product[];
      let totalproducts:number=parseInt(data.headers.get('x-Total-Count')!);
      this.totalPages = Math.ceil(totalproducts / this.pageSize);
      this.totalProducts = this.products.length;
      this.checkedProducts = this.products.filter(product => product.cheked).length;
      this.loading = false;
    });
}

calculateCheckedProducts() {
  this.checkedProducts = 0;
  this.products.forEach(product => {
    if (product.cheked) {
      this.checkedProducts++;
    }
  });
}

goToPage(page: number) {
  this.currentPage = page;
  this.fetchProducts();
}

searchProducts() {
  this.currentPage = 1;
  this.fetchProducts();
}

  toggleChecked(product: product) {
    product.cheked = !product.cheked;
    this.productService.updateProduct(product)
    .subscribe(() => {
      console.log('Product updated successfully');
      this.calculateCheckedProducts(); 
    }, error => {
      console.error('Error updating product:', error);
      product.cheked = !product.cheked;
    });
  }
  
  deleteProduct(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id)
          .subscribe(() => {
            Swal.fire(
              'Supprimé !',
              'Le produit a été supprimé avec succès.',
              'success'
            );
            this.fetchProducts(); 
          }, error => {
            console.error('Error deleting product:', error);
            Swal.fire(
              'Erreur',
              'Une erreur est survenue lors de la suppression du produit.',
              'error'
            );
          });
      }
    });
  }

  editProduct(product: any) {
    this.router.navigate(['/admin/update', product.id]);
  }
  viewFavorites() {
    this.router.navigate(['/admin/favorites']);
  }
  showDetails(productId: number): void {
    this.router.navigate(['/admin/details', productId]);
  }

}

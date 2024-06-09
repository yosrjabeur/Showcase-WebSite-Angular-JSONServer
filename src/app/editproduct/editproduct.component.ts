import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CrudService } from '../crud/crud.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  productForm!: FormGroup;
  productId!: number;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private productService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      prix: [0, Validators.required],
      photo: [''],
      cheked: [false]
    });

    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.productService.getProductById(this.productId).subscribe((product: product) => {
        this.productForm.patchValue({
          nom: product.nom,
          description: product.description,
          prix: product.prix,
          photo: product.photo,
          cheked: product.cheked
        });
        this.selectedImage = product.photo;
      });
    });
  }

  updateProduct() {
    if (this.productForm.invalid || !this.selectedImage) {
      return;
    }

    const updatedProduct: product = {
      id: this.productId,
      nom: this.productForm.get('nom')?.value,
      description: this.productForm.get('description')?.value,
      prix: this.productForm.get('prix')?.value,
      photo: this.selectedImage as string,
      cheked: this.productForm.get('cheked')?.value
    };

    this.productService.updateProduct(updatedProduct).subscribe(() => {
      this.router.navigate(['/admin/products']);
    });
  }

  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
    }
  }
}
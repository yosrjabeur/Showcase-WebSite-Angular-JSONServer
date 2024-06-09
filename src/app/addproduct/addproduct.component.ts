import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud/crud.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { product } from '../model/product';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})

export class AddproductComponent  implements OnInit {
  productForm!: FormGroup;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private productService: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      prix: [0, Validators.required],
      photo: [''],
      cheked: [false]
    });
  }
  
  addProduct() {
    if (this.productForm.invalid || !this.selectedImage) {
      return;
    }

    const newProduct = {
      ...this.productForm.value,
      photo: this.selectedImage
    };

    this.productService.addProduct(newProduct).subscribe(() => {
      this.productForm.reset();
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
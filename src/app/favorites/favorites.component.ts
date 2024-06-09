import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';
import { CrudService } from '../crud/crud.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favorites: product[] = [];
  constructor(private productService: CrudService) { }
  ngOnInit(): void {
    this.productService.getFavorites().subscribe(products => {
      this.favorites = products;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
categories:Category[]=[];
constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
    this.getCategories();
  }


getCategories() {
  this.categoryService.getCategories().subscribe(response => {
    this.categories = response.data

  })
  console.log();
}
}

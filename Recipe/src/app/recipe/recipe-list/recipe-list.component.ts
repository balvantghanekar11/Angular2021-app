import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple test',
      'https://thebfd.co.nz/wp-content/uploads/2019/02/p4_recipe_web_pork-660x371_95a097e9-5633-4559-8d3a-a044879f8f0c_1200x.jpg'
    ),
    new Recipe(
      'Recipe 2',
      '2nd recipe',
      'https://georgiaabout.files.wordpress.com/2013/09/lobio-with-marinated-cucumber-recipe.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}

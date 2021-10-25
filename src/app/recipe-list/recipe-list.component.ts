import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  constructor(private recipeService : RecipesService, private router: Router) { }
  recipes!: any;
  ngOnInit(): void {
    this.recipeService.getRecipeList().subscribe(data =>{this.recipes = data;});
  }

  reloadData(){
    this.recipeService.getRecipeList()
  }
  recipeDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateRecipe(id: number){
    this.router.navigate(['update', id]);
  }
  deleteRecipe(id: number){
    this.recipeService.deleteRecipe(id).subscribe(data => {console.log(data); this.reloadData;}, error => console.log(error));
  }

}

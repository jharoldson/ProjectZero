import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = new Recipe();
  submitted = false;
  fileToUpload: File | null = null;
  constructor(private recipeService: RecipesService, private router: Router) { }

  ngOnInit(): void {
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = new Recipe();

  }
  save() {
    this.recipeService.addRecipe(this.recipe).subscribe(data => console.log(data), error => console.log(error));
    this.recipe = new Recipe();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList(){
    this.router.navigate(['/recipes'])
  }


}

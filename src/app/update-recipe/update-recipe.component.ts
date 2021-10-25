import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {

  id!: number;
  recipe!: Recipe;

  constructor(private route: ActivatedRoute, private router: Router,
    private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipe = new Recipe();
    this.id = this.route.snapshot.params['id'];
    this.recipeService.getRecipes(this.id).subscribe(data =>{console.log(data), this.recipe = data;}, error=> console.log(error));
  }

  updateRecipe(){
    this.recipeService.updateRecipe(this.id, this.recipe).subscribe(data => console.log(data), error => console.log(error));
    this.recipe = new Recipe();
    this.gotoList();
  }

  onSubmit() {
    this.updateRecipe();
  }

  gotoList() {
    this.router.navigate(['/recipes']);
  }


}

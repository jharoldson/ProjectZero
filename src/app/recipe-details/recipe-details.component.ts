import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  id!: number;
  recipe!: Recipe;
  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipe = new Recipe();
    this.id = this.route.snapshot.params['id'];
    this.recipeService.getRecipes(this.id).subscribe(data => {console.log(data), this.recipe = data;}, error => console.log(error));
  }

  list(){
    this.router.navigate(['listComponent']);
  }

}

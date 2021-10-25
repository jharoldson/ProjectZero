import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  baseurl="http://localhost:3000/recipes/"
  constructor(private http:HttpClient) { 

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getRecipes(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseurl}/${id}`)
  }
  getRecipeList(){
    return this.http.get(`${this.baseurl}`);
  }
  addRecipe(recipe: Object): Observable<Object> {
    return this.http.post(`${this.baseurl}`, recipe);
  }
  updateRecipe(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseurl}/${id}`, value);
  }
  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`, {responseType: 'text'});
  }
}

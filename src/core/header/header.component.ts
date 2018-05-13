import {Component} from '@angular/core';
import { DataStorageService } from '../../app/shared/data-storage.service';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../../app/recipes/recipe.service';
import { AuthService } from '../../app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}


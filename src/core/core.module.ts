import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../app/shared/shared.module';
import { AppRoutingModule } from '../app/app-routing.module';
import { AuthGuard } from '../app/auth/auth-guard.service';
import { AuthService } from '../app/auth/auth.service';
import { RecipeService } from '../app/recipes/recipe.service';
import { ShoppingListService } from '../app/shopping-list/shopping-list.service';
import { DataStorageService } from '../app/shared/data-storage.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        AuthGuard]
})
export class CoreModule {}

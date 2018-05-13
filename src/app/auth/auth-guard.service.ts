import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       const authenticated = this.authService.isAuthenticated();
       if (authenticated) {
           return true;
       } else {
           this.router.navigate(['/signin']);
           return false;
       }
    }

    canLoad(route: Route) {
        const authenticated = this.authService.isAuthenticated();
        if (authenticated) {
            return true;
        } else {
            this.router.navigate(['/signin']);
            return false;
        }
    }
}

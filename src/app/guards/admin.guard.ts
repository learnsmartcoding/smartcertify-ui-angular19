import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { PostLoginRedirectService } from '../services/post-login-redirect.service';
import { CurrentUserService } from '../services/current-user.service';
import { catchError, map, of } from 'rxjs';

export const canActivateAdminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(LoginService);
  const toastrService = inject(ToastrService);
  const router = inject(Router);
  const postLoginRedirectService = inject(PostLoginRedirectService);
  const currentUserService = inject(CurrentUserService);

  authService.refreshFromMsal();

  if (!authService.isLoggedIn) {
    postLoginRedirectService.set(state.url);
    authService.login();
    return false;
  }

  return currentUserService.loadCurrentUser().pipe(
    map((user) => {
      const isAdmin = user.roles?.some(
        (role) => role.roleName.toLowerCase() === 'admin'
      );

      if (isAdmin) {
        return true;
      }

      toastrService.error(
        'You do not have access to Admin Module',
        'Access Denied'
      );
      return router.createUrlTree(['/home']);
    }),
    catchError(() => {
      toastrService.error(
        'Unable to verify your access to Admin Module',
        'Access Denied'
      );
      return of(router.createUrlTree(['/home']));
    })
  );
};

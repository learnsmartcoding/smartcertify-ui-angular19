import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { PostLoginRedirectService } from '../services/post-login-redirect.service';

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(LoginService);
  const toastrService = inject(ToastrService);
  const postLoginRedirectService = inject(PostLoginRedirectService);

  authService.refreshFromMsal();

  if (authService.isLoggedIn) {
    return true;
  } else {
    toastrService.info(
      'You need to login to access the feature.',
      'Login Required'
    );
    postLoginRedirectService.set(state.url);
    authService.login();
    return false;
  }
};

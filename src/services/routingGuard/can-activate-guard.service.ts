import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { map } from "rxjs";
import { AuthService } from "../authService/auth.service";
import { differenceInMinutes } from "date-fns";

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

 const result = authService.getLogin().pipe(
    map(({ email, loginDateTime }) => {
      if (email === null || loginDateTime === null)
        return router.createUrlTree(['Login']);

      const now = new Date().toString()
      const diff = differenceInMinutes(now, loginDateTime)
      if (diff > 1) return router.createUrlTree(['Login']);

      return true
    })
  )
 return result
};

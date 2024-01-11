import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { first, switchMap } from "rxjs";
import { AuthService } from "../data/services/auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const authService = inject(AuthService);

	return authService.token$.pipe(
		first(),
		switchMap((token) => {
			if (!token) {
				return next(req);
			}

			const headers = req.headers.set("X-Auth-Token", token);
			return next(req.clone({ headers }));
		}),
	);
};

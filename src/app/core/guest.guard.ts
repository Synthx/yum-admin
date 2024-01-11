import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthStore } from "../store/auth.store";

export const guestGuard: CanActivateFn = (route, state) => {
	const authStore = inject(AuthStore);
	const router = inject(Router);

	if (!authStore.logged()) {
		return true;
	}

	return router.createUrlTree(["/"]);
};

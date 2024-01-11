import { Injectable, computed, inject } from "@angular/core";
import { Router } from "@angular/router";
import { patchState, signalStore } from "@ngrx/signals";
import { AuthService } from "../data/services/auth.service";
import { authState } from "./auth.state";
import { FirebaseError } from "@angular/fire/app";
import {ToastService} from "../components";

@Injectable({
	providedIn: "root",
})
export class AuthStore extends signalStore(authState) {
  private readonly toastService = inject(ToastService);
	private readonly authService = inject(AuthService);
	private readonly router = inject(Router);

	readonly logged = computed(() => !!this.user());

	login(email: string, password: string) {
		patchState(this, { loading: true });
		this.authService.login(email, password).subscribe({
			next: (user) => {
				patchState(this, { user: user, loading: false });
        this.router.navigate(['/']);
			},
			error: (error) => {
        if (error instanceof FirebaseError) {
          let message = 'Oops';
          this.toastService.open(message, 'error');
        }
				patchState(this, { loading: false });
			},
		});
	}

	resetPassword(email: string) {
		this.authService.resetPassword(email).subscribe();
	}

	logout(): void {
		this.authService.logout().subscribe(() => {
			patchState(this, { user: null });
      this.router.navigate(['/auth/login']);
		});
	}
}

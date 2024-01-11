import { Injectable, inject } from "@angular/core";
import {
	Auth,
	User,
	idToken,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from "@angular/fire/auth";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Observable, from, map } from "rxjs";

@UntilDestroy()
@Injectable({ providedIn: "root" })
export class AuthService {
	private readonly auth: Auth = inject(Auth);

	readonly token$ = idToken(this.auth).pipe(untilDestroyed(this));

	login(email: string, password: string): Observable<User> {
		return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
			map((credential) => credential.user),
		);
	}

	resetPassword(email: string): Observable<void> {
		return from(sendPasswordResetEmail(this.auth, email));
	}

	logout(): Observable<void> {
		return from(signOut(this.auth));
	}
}

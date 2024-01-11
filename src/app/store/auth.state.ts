import { User } from "@angular/fire/auth";
import { withState } from "@ngrx/signals";

export type AuthState = {
	loading: boolean;
	user: User | null;
};

export const initialAuthState: AuthState = {
	loading: false,
	user: null,
};

export const authState = withState(initialAuthState);

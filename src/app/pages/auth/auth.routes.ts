import { Routes } from "@angular/router";
import { authGuard } from "../../core/auth.guard";
import { guestGuard } from "../../core/guest.guard";
import { AuthComponent } from "./auth.component";

export default [
	{
		path: "",
		component: AuthComponent,
		children: [
			{
				path: "login",
				title: "Sign in",
				canActivate: [guestGuard],
				loadComponent: () =>
					import("./auth-login/auth-login.component").then(
						(m) => m.AuthLoginComponent,
					),
			},
			{
				path: "reset-password",
				title: "Reset password",
				canActivate: [guestGuard],
				loadComponent: () =>
					import("./reset-password/reset-password.component").then(
						(m) => m.AuthResetPasswordComponent,
					),
			},
			{
				path: "logout",
				title: "Sign out",
				canActivate: [authGuard],
				loadComponent: () =>
					import("./auth-logout/auth-logout.component").then(
						(m) => m.AuthLogoutComponent,
					),
			},
		],
	},
] as Routes;

import { Routes } from "@angular/router";
import { authGuard } from "./core/auth.guard";
import { LayoutComponent } from "./layout/layout.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

export const routes: Routes = [
	{
		path: "auth",
		loadChildren: () => import("./pages/auth/auth.routes"),
	},
	{
		path: "",
		component: LayoutComponent,
		canActivate: [authGuard],
		children: [
			{
				path: "",
				loadComponent: () =>
					import("./pages/main/main.component").then((m) => m.MainComponent),
			},
		],
	},
	{
		path: "**",
		title: "Page not found",
		component: NotFoundComponent,
	},
];

import {
	ApplicationConfig,
	LOCALE_ID,
	importProvidersFrom,
} from "@angular/core";
import {
	TitleStrategy,
	provideRouter,
	withComponentInputBinding,
} from "@angular/router";

import { provideHttpClient } from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { provideAnimations } from "@angular/platform-browser/animations";
import { env } from "../env";
import { routes } from "./app.routes";
import { PageTitleStrategy } from "./core/page-title-strategy";

export const appConfig: ApplicationConfig = {
	providers: [
		provideAnimations(),
		provideHttpClient(),
		provideRouter(routes, withComponentInputBinding()),
		importProvidersFrom(
			provideFirebaseApp(() => initializeApp(env.firebase)),
			provideAuth(() => getAuth()),
		),
		{
			provide: LOCALE_ID,
			useValue: "en-EN",
		},
		{
			provide: TitleStrategy,
			useClass: PageTitleStrategy,
		},
	],
};

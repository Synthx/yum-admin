import { Injectable, inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable({ providedIn: "root" })
export class PageTitleStrategy extends TitleStrategy {
	private readonly title = inject(Title);

	updateTitle(routerState: RouterStateSnapshot): void {
		const title = this.buildTitle(routerState);
		if (title) {
			this.title.setTitle(`Yum | ${title}`);
		}
	}
}

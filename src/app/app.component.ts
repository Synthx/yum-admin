import { Component, OnInit, inject } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
	standalone: true,
	selector: "app-root",
	template: "<router-outlet />",
	imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
	private readonly router = inject(Router);

	ngOnInit(): void {
		this.router.events.pipe(untilDestroyed(this)).subscribe((e) => {
			console.log("event", e);
		});
	}
}

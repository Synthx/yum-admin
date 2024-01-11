import { Component, OnInit, inject } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { YumSpinnerComponent } from "../../../components";
import { AuthStore } from "../../../store/auth.store";

@Component({
	standalone: true,
	selector: "app-auth-logout",
	templateUrl: "./auth-logout.component.html",
	styleUrl: "./auth-logout.component.scss",
	imports: [ReactiveFormsModule, YumSpinnerComponent],
})
export class AuthLogoutComponent implements OnInit {
	private readonly authStore = inject(AuthStore);

	ngOnInit(): void {
		setTimeout(() => {
			this.authStore.logout();
		}, 2000);
	}
}

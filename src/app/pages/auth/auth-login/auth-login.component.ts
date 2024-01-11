import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { YumButtonComponent, YumFormFieldModule } from "../../../components";
import { YumIconButtonComponent } from "../../../components/action/icon-button/icon-button.component";
import { AuthStore } from "../../../store/auth.store";

@Component({
	standalone: true,
	selector: "app-auth-login",
	templateUrl: "./auth-login.component.html",
	styleUrl: "./auth-login.component.scss",
	imports: [
		ReactiveFormsModule,
		YumButtonComponent,
		YumFormFieldModule,
		YumIconButtonComponent,
		RouterLink,
	],
})
export class AuthLoginComponent {
	private readonly formBuilder = inject(FormBuilder);
	readonly authStore = inject(AuthStore);

	readonly loginForm = this.formBuilder.nonNullable.group({
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required]],
	});

	showPassword = false;

	hideOrShowPassword(): void {
		this.showPassword = !this.showPassword;
	}

	login(): void {
		if (this.loginForm.invalid) return;

		const { email, password } = this.loginForm.getRawValue();
		this.authStore.login(email, password);
	}
}

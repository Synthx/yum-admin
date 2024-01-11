import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { YumButtonComponent, YumFormFieldModule } from "../../../components";
import { AuthStore } from "../../../store/auth.store";

@Component({
	standalone: true,
	selector: "app-reset-password",
	templateUrl: "./reset-password.component.html",
	styleUrl: "./reset-password.component.scss",
	imports: [
		ReactiveFormsModule,
		YumButtonComponent,
		YumFormFieldModule,
		RouterLink,
	],
})
export class AuthResetPasswordComponent {
	private readonly formBuilder = inject(FormBuilder);
	private readonly authStore = inject(AuthStore);

	readonly resetPasswordForm = this.formBuilder.nonNullable.group({
		email: ["", [Validators.required, Validators.email]],
	});

	sendEmail() {
		if (this.resetPasswordForm.invalid) return;

		const { email } = this.resetPasswordForm.getRawValue();
		this.authStore.resetPassword(email);
	}
}

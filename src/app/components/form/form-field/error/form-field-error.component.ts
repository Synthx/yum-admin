import { Component, Input, TemplateRef, ViewChild } from "@angular/core";

@Component({
	selector: "yum-form-field-error",
	templateUrl: "./form-field-error.component.html",
})
export class YumFormFieldErrorComponent {
	@ViewChild("templateRef")
	templateRef?: TemplateRef<YumFormFieldErrorComponent>;

	@Input({ required: true })
	type!: string;
}

import { NgTemplateOutlet } from "@angular/common";
import { NgModule } from "@angular/core";
import { YumSpinnerComponent } from "../../indicator";
import { YumFormFieldErrorComponent } from "./error/form-field-error.component";
import { YumFormFieldActionDirective } from "./form-field-action.directive";
import { YumFormFieldHintDirective } from "./form-field-hint.directive";
import { YumFormFieldInputDirective } from "./form-field-input.directive";
import { YumFormFieldComponent } from "./form-field.component";

@NgModule({
	declarations: [
		YumFormFieldComponent,
		YumFormFieldErrorComponent,
		YumFormFieldInputDirective,
		YumFormFieldHintDirective,
		YumFormFieldActionDirective,
	],
	imports: [NgTemplateOutlet, YumSpinnerComponent],
	exports: [
		YumFormFieldComponent,
		YumFormFieldErrorComponent,
		YumFormFieldInputDirective,
		YumFormFieldHintDirective,
		YumFormFieldActionDirective,
	],
})
export class YumFormFieldModule {}

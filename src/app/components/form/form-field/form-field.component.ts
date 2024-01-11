import {
	Component,
	ContentChild,
	ContentChildren,
	QueryList,
	TemplateRef,
	ViewEncapsulation,
} from "@angular/core";
import { YumFormFieldErrorComponent } from "./error/form-field-error.component";
import { YumFormFieldActionDirective } from "./form-field-action.directive";
import { YumFormFieldHintDirective } from "./form-field-hint.directive";
import { YumFormFieldInputDirective } from "./form-field-input.directive";

@Component({
	selector: "yum-form-field",
	templateUrl: "./form-field.component.html",
	styleUrl: "./form-field.component.scss",
	encapsulation: ViewEncapsulation.None,
})
export class YumFormFieldComponent {
	@ContentChild(YumFormFieldInputDirective, { static: true })
	input!: YumFormFieldInputDirective;

	@ContentChild(YumFormFieldHintDirective)
	hint?: YumFormFieldHintDirective;

	@ContentChild(YumFormFieldActionDirective)
	action?: YumFormFieldHintDirective;

	@ContentChildren(YumFormFieldErrorComponent, { descendants: true })
	errors?: QueryList<YumFormFieldErrorComponent>;

	shouldDisplayMessage(): boolean {
		if (this.hint) return true;

		const keys = Object.keys(this.input.errors ?? {});
		if (keys.length === 0) return false;

		return this.errors?.some((e) => e.type === keys[0]) ?? false;
	}

	getDisplayedMessage(): "error" | "hint" {
		return this.errors && this.errors.length > 0 && this.input.invalid
			? "error"
			: "hint";
	}

	getErrorMessage(): TemplateRef<YumFormFieldErrorComponent> | null {
		const keys = Object.keys(this.input.errors ?? {});
		if (keys.length === 0) {
			return null;
		}

		const error = this.errors?.find((e) => e.type === keys[0]);
		return error?.templateRef ?? null;
	}
}

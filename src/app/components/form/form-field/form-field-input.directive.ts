import { Directive, ElementRef, Input, OnChanges, Self } from "@angular/core";
import { NgControl, ValidationErrors, Validators } from "@angular/forms";
import {
	InputErrorStateMatcherFn,
	defaultInputErrorStateMatcher,
} from "./form-field-input.options";

let nextId = 0;

@Directive({
	selector:
		"input[yumFormFieldInput], textarea[yumFormFieldInput], select[yumFormFieldInput]",
	host: {
		class: "yum-form-field-input",
		"[class.yum-form-field-input--select]": "_isSelect",
		"[class.yum-form-field-input--textarea]": "_isTextarea",
		"[class.yum-form-field-input--invalid]": "invalid",
		"[id]": "inputId",
		"[attr.id]": "inputId",
		"(blur)": "setFocused(false)",
		"(focus)": "setFocused(true)",
	},
})
export class YumFormFieldInputDirective implements OnChanges {
	focused = false;

	@Input()
	type: "text" | "email" | "password" | "tel" | "number" | "date" = "text";

	@Input()
	id?: string;

	@Input()
	stateMatcher?: InputErrorStateMatcherFn;

	_isTextarea: boolean;
	_isSelect: boolean;
	_uniqueId = `kia-form-field-input-${nextId++}`;

	get inputId(): string {
		return this.id ?? this._uniqueId;
	}

	get errors(): ValidationErrors | null {
		return this.ngControl.errors;
	}

	get invalid(): boolean {
		return (
			this.stateMatcher?.(this.ngControl) ??
			defaultInputErrorStateMatcher(this.ngControl)
		);
	}

	get pending(): boolean {
		return this.ngControl.pending ?? false;
	}

	get required(): boolean {
		return this.ngControl.control?.hasValidator(Validators.required) ?? false;
	}

	constructor(
		private elementRef: ElementRef<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
		@Self() private ngControl: NgControl,
	) {
		const element = this.elementRef.nativeElement;
		const nodeName = element.nodeName.toLowerCase();

		this._isTextarea = nodeName === "textarea";
		this._isSelect = nodeName === "select";
	}

	ngOnChanges(): void {
		if (!this._isTextarea && !this._isSelect) {
			(this.elementRef.nativeElement as HTMLInputElement).type = this.type;
		}
	}

	setFocused(focused: boolean): void {
		this.focused = focused;
	}
}

import { Component, Input, booleanAttribute, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

let nextId = 0;

@Component({
	standalone: true,
	selector: "yum-checkbox",
	templateUrl: "./checkbox.component.html",
	styleUrl: "./checkbox.component.scss",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => YumCheckboxComponent),
			multi: true,
		},
	],
})
export class YumCheckboxComponent implements ControlValueAccessor {
	readonly _uniqueId = `kia-checkbox-input-${nextId++}`;

	checked = false;
	disabled = false;

	onChange: (value: boolean) => void = (_) => {};
	onTouch: () => void = () => {};

	@Input()
	id?: string;

	@Input({ transform: booleanAttribute })
	required = false;

	get inputId(): string {
		return this.id ?? this._uniqueId;
	}

	toggle(): void {
		this.checked = !this.checked;
		this.onChange(this.checked);
	}

	writeValue(value: unknown): void {
		this.checked = !!value;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	registerOnChange(fn: (_: boolean) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}
}

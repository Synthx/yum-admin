import { NgControl } from "@angular/forms";

export type InputErrorStateMatcherFn = (control: NgControl | null) => boolean;

export const defaultInputErrorStateMatcher: InputErrorStateMatcherFn = (
	control,
) => {
	return !!(control?.invalid && (control.touched || control.dirty));
};

export const blurInputErrorStateMatcher: InputErrorStateMatcherFn = (
	control,
) => {
	return !!(control?.invalid && control.touched);
};

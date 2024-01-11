import { Directive, Input } from "@angular/core";

@Directive({
	selector: "yum-form-field-hint",
	host: {
		class: "yum-form-field-message-hint",
	},
})
export class YumFormFieldHintDirective {
	@Input()
	align: "start" | "end" = "start";
}

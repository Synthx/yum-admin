import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
	standalone: true,
	selector: "yum-spinner",
	templateUrl: "./spinner.component.html",
	styleUrl: "./spinner.component.scss",
	encapsulation: ViewEncapsulation.None,
})
export class YumSpinnerComponent {
	@Input()
	size: "small" | "medium" | "large" = "medium";
}

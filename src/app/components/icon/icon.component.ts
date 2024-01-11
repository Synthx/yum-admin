import { Component, Input, numberAttribute } from "@angular/core";

@Component({
	standalone: true,
	selector: "yum-icon",
	templateUrl: "./icon.component.html",
	styleUrl: "./icon.component.scss",
	imports: [],
})
export class YumIconComponent {
	@Input({ required: true })
	name!: string;

	@Input({ transform: numberAttribute })
	size = 24;
}

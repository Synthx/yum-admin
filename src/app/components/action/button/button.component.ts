import {
	Component,
	EventEmitter,
	Input,
	Output,
	ViewEncapsulation,
	booleanAttribute,
} from "@angular/core";
import { YumSpinnerComponent } from "../../indicator";

@Component({
	standalone: true,
	selector: "yum-button",
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.scss",
	imports: [YumSpinnerComponent],
	encapsulation: ViewEncapsulation.None,
})
export class YumButtonComponent {
	@Input()
	variant: "primary" | "secondary" | "ghost" = "primary";

	@Input()
	type: "button" | "reset" | "submit" = "button";

	@Input({ transform: booleanAttribute })
	disabled = false;

	@Input({ transform: booleanAttribute })
	loading = false;

	@Output()
	tapped = new EventEmitter<MouseEvent>();
}

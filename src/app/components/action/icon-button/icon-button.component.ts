import {
	Component,
	EventEmitter,
	Input,
	Output,
	ViewEncapsulation,
	booleanAttribute,
} from "@angular/core";
import { YumIconComponent } from "../../icon/icon.component";

@Component({
	standalone: true,
	selector: "yum-icon-button",
	templateUrl: "./icon-button.component.html",
	styleUrl: "./icon-button.component.scss",
	imports: [YumIconComponent],
	encapsulation: ViewEncapsulation.None,
})
export class YumIconButtonComponent {
	@Input({ required: true })
	icon!: string;

	@Input()
	variant: "primary" | "secondary" | "default" = "default";

	@Input()
	size: "medium" | "small" | "x-small" = "medium";

	@Input({ transform: booleanAttribute })
	disabled = false;

	@Output()
	tapped = new EventEmitter<MouseEvent>();
}

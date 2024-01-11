import { Component, Inject, ViewEncapsulation } from "@angular/core";
import { YumIconComponent } from "../../icon/icon.component";
import { YUM_TOAST_DATA, YumToastData } from "./toast-data";

export type YumToastType = "primary" | "validation" | "warning" | "error";

@Component({
	standalone: true,
	selector: "yum-toast",
	templateUrl: "./toast.component.html",
	styleUrl: "./toast.component.scss",
	imports: [YumIconComponent],
	encapsulation: ViewEncapsulation.None,
})
export class YumToastComponent {
	constructor(@Inject(YUM_TOAST_DATA) public readonly data: YumToastData) {}
}

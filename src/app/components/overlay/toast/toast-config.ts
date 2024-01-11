import { InjectionToken } from "@angular/core";

export type KiaToastHorizontalPosition = "center" | "left" | "right";
export type KiaToastVerticalPosition = "top" | "bottom";

export class YumToastConfig {
	duration?: number = 5000;
	horizontalPosition?: KiaToastHorizontalPosition = "center";
	verticalPosition?: KiaToastVerticalPosition = "bottom";
}

export const YUM_TOAST_DEFAULT_CONFIG = new InjectionToken<YumToastConfig>(
	"yum-toast-default-config",
	{
		providedIn: "root",
		factory: () => new YumToastConfig(),
	},
);

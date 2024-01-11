import { InjectionToken } from "@angular/core";
import { YumToastType } from "./toast.component";

export interface YumToastData {
	content: string;
	type: YumToastType;
	icon?: string;
}

export const YUM_TOAST_DATA = new InjectionToken<YumToastData>(
	"kia-toast-data",
);

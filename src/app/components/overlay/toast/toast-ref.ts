import { OverlayRef } from "@angular/cdk/overlay";

const MAX_TIMEOUT = 2 ** 31 - 1;

export class YumToastRef {
	private durationTimeout?: number;

	constructor(private readonly overlayRef: OverlayRef) {}

	dismiss(): void {
		clearTimeout(this.durationTimeout);
		this.overlayRef.dispose();
	}

	dismissAfter(duration: number): void {
		this.durationTimeout = window.setTimeout(
			() => this.dismiss(),
			Math.min(duration, MAX_TIMEOUT),
		);
	}
}

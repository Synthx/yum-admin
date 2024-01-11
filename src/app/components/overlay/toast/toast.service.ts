import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Inject, Injectable, Injector } from "@angular/core";
import { YUM_TOAST_DEFAULT_CONFIG, YumToastConfig } from "./toast-config";
import { YUM_TOAST_DATA } from "./toast-data";
import { YumToastRef } from "./toast-ref";
import { YumToastComponent, YumToastType } from "./toast.component";

@Injectable({
	providedIn: "root",
})
export class ToastService {
	private lastRef?: YumToastRef;

	constructor(
		private readonly rootInjector: Injector,
		private readonly overlay: Overlay,
		private readonly breakpointObserver: BreakpointObserver,
		@Inject(YUM_TOAST_DEFAULT_CONFIG)
		private readonly defaultConfig: YumToastConfig,
	) {}

	open(
		content: string,
		type: YumToastType = "primary",
		config?: YumToastConfig,
	): YumToastRef {
		this.lastRef?.dismiss();

		const _config: YumToastConfig = {
			...new YumToastConfig(),
			...this.defaultConfig,
			...config,
		};
		const overlayRef = this.createOverlayRef(_config);
		const toastRef = new YumToastRef(overlayRef);
		this.lastRef = toastRef;

		const injector = Injector.create({
			parent: this.rootInjector,
			providers: [
				{ provide: YumToastRef, useValue: toastRef },
				{ provide: YUM_TOAST_DATA, useValue: { content, type } },
			],
		});

		const componentPortal = new ComponentPortal(
			YumToastComponent,
			null,
			injector,
		);
		overlayRef.attach(componentPortal);

		if (_config.duration && _config.duration > 0) {
			toastRef.dismissAfter(_config.duration);
		}

		return toastRef;
	}

	dismiss(): void {
		this.lastRef?.dismiss();
	}

	private createOverlayRef(config: YumToastConfig): OverlayRef {
		const isWeb = this.breakpointObserver.isMatched(Breakpoints.Web);
		const overlayConfig: OverlayConfig = {
			maxWidth: isWeb ? "450px" : "85%",
		};

		let strategy = this.overlay.position().global();
		// set horizontal position
		if (config.horizontalPosition === "left") {
			strategy = strategy.left("15px");
		} else if (config.horizontalPosition === "right") {
			strategy = strategy.right("15px");
		} else {
			strategy = strategy.centerHorizontally();
		}

		// set vertical position
		if (config.verticalPosition === "top") {
			strategy = strategy.top("calc(15px + env(safe-area-inset-top))");
		} else {
			strategy = strategy.bottom("calc(15px + env(safe-area-inset-bottom))");
		}

		overlayConfig.positionStrategy = strategy;

		return this.overlay.create(overlayConfig);
	}
}

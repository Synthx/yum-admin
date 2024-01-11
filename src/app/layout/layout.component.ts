import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LayoutHeaderComponent } from "./layout-header/layout-header.component";

@Component({
	standalone: true,
	selector: "app-layout",
	templateUrl: "./layout.component.html",
	styleUrl: "./layout.component.scss",
	imports: [RouterOutlet, LayoutHeaderComponent],
})
export class LayoutComponent {}

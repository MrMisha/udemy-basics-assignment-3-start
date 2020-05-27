import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public detailsVisible: boolean = false;
	public clickArray = [];

	public toggleVisibilityDetails() {
		this.detailsVisible = !this.detailsVisible;
		this.logClick();
	}

	public getItemStyle(item: number): any{
		return this.useStyle(item)
			? { backgroundColor: 'blue' }
			: {}
	}

	public getItemClass(item: number): any {
		return { 
			'click-array': true,
			white: this.useStyle(item)
		};
	}

	private useStyle(item: number): boolean {
		return item >= 5;
	}

	private logClick(){
		this.clickArray.push(this.clickArray.length + 1);
	}
}

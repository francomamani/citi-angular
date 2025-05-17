import {Component, Input} from '@angular/core';
import { CommonModule } from "@angular/common";
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'citi-menu',
  imports: [
      CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() menuItemSelected: MenuItem | null = null;

  public selectMenuItem(menuItem: MenuItem): void {
    this.menuItemSelected = menuItem;
  }
}

import { Component } from '@angular/core';
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { createPopper, popperOffsets } from '@popperjs/core';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CartSummaryComponent, MatSelectModule, CommonModule, FormsModule,],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'net-return-simulator';

  formData = {
    purchasePrice: 0,
    monthlyRent: 0,
    annualRentalFee: 0
  };

  showResult = false;
  resultMessage = '';

  onSubmit() {
    console.log(this.formData);

    /* Compute results */

    const fees = [0.3, 0.25, 0.2];

    const MNIs = fees.map(fee =>
      this.formData.monthlyRent * (1 - fee) - this.formData.annualRentalFee / 12
      // NOTE: I am factoring in the annual rental fee as a monthly expense for monthly estimates, yet assuming this is a yearly payment.
    );

    const ROIs = MNIs.map(MNI => 
      12 * MNI / this.formData.purchasePrice
    );


    /* Build result message */

    let resultMessageBuilder = '';
    
    for (let year = 1; year <= fees.length; year++) {
      resultMessageBuilder += `
        <b>YEAR ${year}</b>
        &nbsp;&nbsp;
    
        MNI: €${Math.round(MNIs[year - 1])}
        &nbsp;&nbsp;
        ROI: ${Math.round(ROIs[year - 1] * 100)}%
    
        <br>
      `;
    }
    
    this.resultMessage = resultMessageBuilder;
    this.showResult = true;

  }
}

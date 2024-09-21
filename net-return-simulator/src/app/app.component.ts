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

  onSubmit(form: any) {
    console.log(this.formData);

    const fees = [0.3, 0.25, 0.2];

    const MNIs = fees.map(fee => Math.round(
      this.formData.monthlyRent * (1 - fee)
    ));

    const ROIs = MNIs.map(MNI => Math.round(
      100 * 12 * MNI / this.formData.purchasePrice
    ));

    let resultMessage = '';
    
    for (let year = 1; year <= fees.length; year++) {
      resultMessage += `
        <b>YEAR ${year}</b>
        &nbsp;&nbsp;
    
        MNI: ${MNIs[year - 1]}
        &nbsp;&nbsp;
        ROI: ${ROIs[year - 1]}%
    
        <br>
      `;
    }
    
    this.resultMessage = resultMessage;
    this.showResult = true;
  }
}

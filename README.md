
<img src="net-return-simulator/public/logo.svg" width="500">

<br />

This is a prototype web interface for Emerald Stay that calculates the monthly net income and return on investment for a property over the first three years.

Check it out live <a href="https://brianko14.github.io/emerald_stay_test/">right here.</a>

<br />

<img src="https://i.imgur.com/C6knt4P.png" href="https://brianko14.github.io/emerald_stay_test/" height="300">

<br />

### Interpretation of formulas

$$\text{Monthly Net Income (MNI)} = \text{Monthly Rent} \times (1 - \text{Agency Fee}) - \frac{\text{Annual Rental Fee}}{12}$$

$$\text{Return on Investment (ROI}_i) = \frac{\text{MNI} \times 12}{\text{Purchase Price}} - \text{ROI}_{i-1}$$

<br />

**Implementation decisions:** I am factoring in the annual rental fee as a monthly expense for monthly estimates, yet assuming this is a yearly payment. ROI is cumulative.

import React, { Component } from "react";
 
class Calc extends Component {
  render() {
    return (
      <div>
        <h2>How does one calculate their BMI?</h2>
        <p>Calculating one's BMI is simple! The formula for calculating
            their BMI goes as W/H^2 where W is one's weight (in Kilograms)
            and H is their height (in Meters). After you calculate it one
            will figure out how overweight or underweight one is from
            the index below.
        </p>
        <ol>
          <li>Less than 18.4 - Underweight</li>
          <li>18.5-24.9 - Healthy</li>
          <li>25-29.9 - Overweight</li>
          <li>Greater than 30 - Obese</li>
        </ol>
      </div>
    );
  }
}
 
export default Calc;
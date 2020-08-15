import React, { Component } from "react";
 
class Advice extends Component {
  render() {
    return (
      <div>
        <h2>How do I increase/decrease my BMI?</h2>
        <p>Some tips for having a better BMI value include, but aren't limited to:
            Frequent exercise, doing some workouts everyday can help improve
            weight loss and thus improve one's overall BMI value. Another tip
             includes healthy eating habbits, avoid frequent junk foods or fast food
             options and eating more fruits and vegetables in one's diet.
        </p>
        <h2>Notes and Exceptions</h2>
        <p>
        While the above do help and assist with maintaining the ideal
            BMI value, there are some notable cases that may hinder or help
           them. Various users have different metabolism rates, quicker rates
           can help lose or maintain their weight, thus reducing or negating the need               for exercise or a diet. Slower rates hinder weight loss and make
           it more difficult to lose the weight even with diets and exercise.
           Other factors include various diseases such as Diabetes which hinders
           ones sugar intake.
        </p>
      </div>
    );
  }
}
 
export default Advice;
import { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevGood => ({
      good: prevGood.good + 1,
    }));
  };

  addNeutral = () => {
    this.setState(prevNeutral => ({
      neutral: prevNeutral.neutral + 1,
    }));
  };

  addBad = () => {
    this.setState(prevBad => ({
      bad: prevBad.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good * 100;
    return Math.round(good / total);
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <div>
          <p>Please leave feedback</p>

          <FeedbackOptions
            // options={ }
            onLeaveFeedback={this}
          ></FeedbackOptions>
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        ></Statistics>
      </div>
    );
  }
}

export default App;

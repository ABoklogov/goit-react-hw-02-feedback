import { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addReview = e => {
    const { name } = e.currentTarget;
    this.setState(prevReview => ({
      [name]: prevReview[name] + 1,
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
    const arrState = Object.keys(this.state);
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={arrState}
            onLeaveFeedback={this}
          ></FeedbackOptions>

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          >
            <Notification message="No feedback given"></Notification>
          </Statistics>
        </Section>
      </>
    );
  }
}

export default App;

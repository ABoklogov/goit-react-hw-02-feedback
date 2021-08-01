const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={onLeaveFeedback.addGood}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onLeaveFeedback.addNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onLeaveFeedback.addBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;

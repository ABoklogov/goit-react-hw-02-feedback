const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={onLeaveFeedback.addGood}>
          {options[0]}
        </button>
      </li>
      <li>
        <button type="button" onClick={onLeaveFeedback.addNeutral}>
          {options[1]}
        </button>
      </li>
      <li>
        <button type="button" onClick={onLeaveFeedback.addBad}>
          {options[2]}
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;

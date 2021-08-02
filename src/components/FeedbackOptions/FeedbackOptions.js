const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <li>
        <button
          type="button"
          name={options[0]}
          onClick={onLeaveFeedback.addReview}
        >
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          name={options[1]}
          onClick={onLeaveFeedback.addReview}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          name={options[2]}
          onClick={onLeaveFeedback.addReview}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;

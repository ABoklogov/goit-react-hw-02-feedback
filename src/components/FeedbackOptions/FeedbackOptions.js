import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="feedback-list">
      {options.map(review => (
        <li key={review} className="feedback-items">
          <button
            type="button"
            name={review}
            className="feedback-btn"
            onClick={() => onLeaveFeedback(review)}
          >
            {review}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

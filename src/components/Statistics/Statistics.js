const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  children,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      {good + neutral + bad === 0 ? (
        children
      ) : (
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total}</p>
          </li>
          <li>
            <p>Positive feedback: {total === 0 ? 0 : positivePercentage}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Statistics;

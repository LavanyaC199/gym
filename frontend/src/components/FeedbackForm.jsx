export default function FeedbackForm() {
  return (
    <div className="card">
      <h3>⭐ Trainer Feedback</h3>
      <select>
        <option>5 - Excellent</option>
        <option>4 - Good</option>
        <option>3 - Average</option>
      </select>
      <textarea placeholder="Write feedback" />
      <button className="btn-primary">Submit</button>
    </div>
  );
}

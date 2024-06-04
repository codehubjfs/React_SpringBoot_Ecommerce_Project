import React, { useState } from 'react';
import '../App.css'; // Assuming you have a CSS file for styling FAQ items

function FAQItem({ question, answer, questionStyle }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="ui-faq-item">
      <div className="ui-faq-header">
        <span className="ui-faq-question ui-faq-text" style={questionStyle}>{question}</span>
        <button className="ui-toggle-buttons" onClick={toggleAnswer}>{showAnswer ? "-" : "+"}</button>
      </div>
      {showAnswer && <p className="ui-faq-answer ui-faq-text">{answer}</p>}
      <hr /> {/* Horizontal line */}
    </div>
  );
}

export default FAQItem;

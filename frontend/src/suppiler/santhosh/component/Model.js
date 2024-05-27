import React, { useState } from 'react';

const Modal = ({ selectedQuestions, onClose }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [addingNewQuestion, setAddingNewQuestion] = useState(false);

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== '' && newAnswer.trim() !== '') {
      setQuestionsAndAnswers(prevState => [...prevState, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  const handleToggleAddQuestion = () => {
    setAddingNewQuestion(!addingNewQuestion);
  };

  return (
    <div className="modal" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
      <div className="modal-content">
        <h2>Selected Questions</h2>
        <form>
          {selectedQuestions.map(question => (
            <div key={question.id}>
              <label>
                <input type="radio" name="selectedQuestion" value={question.text} />
                {question.text}
              </label>
            </div>
          ))}
          <button onClick={onClose}>Close</button>
          <button type="button" onClick={handleToggleAddQuestion}>Add</button>
        </form>
        {addingNewQuestion && (
          <div>
            <h2>Add New Question & Answer</h2>
            <div>
              <label>
                Question:
                <input type="text" value={newQuestion} onChange={e => setNewQuestion(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Answer:
                <input type="text" value={newAnswer} onChange={e => setNewAnswer(e.target.value)} />
              </label>
            </div>
            <button onClick={handleAddQuestion}>Add Question & Answer</button>
          </div>
        )}
        <h2>Questions & Answers</h2>
        <ul>
          {questionsAndAnswers.map((qa, index) => (
            <li key={index}>
              <strong>Question:</strong> {qa.question}, <strong>Answer:</strong> {qa.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
